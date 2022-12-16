import Link from 'next/link'
import { Icon } from '~/assets'

export function Footer () {
  return (
    <div className='flex justify-center gap-4 text-2xl text-primary'>
      <Link href='https://www.instagram.com/justsavejal' target='_blank' rel='noreferrer'>
        <Icon.Instagram />
      </Link>
    </div>
  )
}
