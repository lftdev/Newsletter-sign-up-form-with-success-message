import { Cover } from './components/Cover'
import { FormEvent, useState } from 'react'
import './scss/style.scss'
function App() {
  interface RegexMap {
    [key: string]: RegExp
  }
  const REGEX: RegexMap = {
    email: /^[a-z]+[a-z\d.-_]+@[a-z]+\.[a-z]{2,3}$/i
  }
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [canProceed,  proceed] = useState(true)

  const handleInput = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    if (value.match(REGEX.email) !== null) {
      setEmail(value)
      setInvalid(false)
    }
    else
      setInvalid(true)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (email !== '')
      proceed(true)
  }
  const handleClick = () => {
    setEmail('')
    proceed(false)
  }
  return (
    <>
      {!canProceed && (<section className='subscription-section'>
        <Cover/>
        <div className='flex-container benefits'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='flex-container'>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a sucess</li>
            <li>And much more!</li>
          </ul>
        </div>
        <form className='flex-container newsletter-form' onSubmit={handleSubmit}>
          <div className='flex-container'>
            <label htmlFor='email'>Email address</label>
            <p className={`invalid-input${invalid? ' reveal' : ''}`}>Valid email required</p>
          </div>
          <input id='email' type='email' placeholder='email@company.com' className='text-field' onInput={handleInput}/>
          <input type='submit' value='Subscribe to monthly newsletter' />
        </form>
      </section>)}
      {canProceed && (<section className="finish-section flex-container">
        <div className='flex-container benefits'>
          <img src='src/assets/images/icon-success.svg' alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <strong>{email}</strong>. Please, open it and click the button inside to confirm your subscription.</p>
        </div>
          <button onClick={handleClick} >Dismiss message</button>
      </section>)}
    </>
  )
}
export default App
