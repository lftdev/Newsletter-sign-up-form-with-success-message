export function StepSection() {
  <section className='subscription-section'>
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
    <form className='flex-container newsletter-form'>
      <label htmlFor='email'>Email address</label>
      <input id='email' type='email' placeholder='email@company.com' className='text-field'/>
      <input type='submit' value='Subscribe to monthly newsletter' />
    </form>
  </section>
}