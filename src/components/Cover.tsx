interface CoverProps {
  breakpoint: string
}
export default ({breakpoint}: CoverProps) => {
  return (
    <>
      {(breakpoint == 'sm') && (
      <header className='cover'></header>)}
      {(breakpoint == 'md') && (
      <aside className='cover'></aside>)}
    </>
  )
}
