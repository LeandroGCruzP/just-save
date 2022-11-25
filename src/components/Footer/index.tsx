import Link from 'next/link'
import {
  BsInstagram
  // BsWhatsapp
} from 'react-icons/bs'

export function Footer () {
  return (
    <div className='flex justify-center gap-4 text-2xl text-primary'>
      <Link href='https://www.instagram.com/justsavejal' target='_blank' rel='noreferrer'>
        <BsInstagram />
      </Link>
      {/* <BsWhatsapp /> */}
    </div>
  )
}
