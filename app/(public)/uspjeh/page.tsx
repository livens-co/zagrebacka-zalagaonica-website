import Link from 'next/link'
import './style.scss'

const SuccessPage = () => {
  return (
    <div className='successPage'>
      <h1>Upit uspješno poslan!</h1>
      <Link href='/'>Početna</Link>
    </div>
  )
}

export default SuccessPage