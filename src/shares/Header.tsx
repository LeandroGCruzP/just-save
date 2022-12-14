import Link from 'next/link'
import { Icon } from '~/assets'

export function Header () {
  return (
    <div className='bg-bg-hover text-primary h-10 px-10 text-sm'>
      <div className='flex h-full items-center justify-between'>
        <Icon.Church className='text-xl' />

        <div className='flex gap-4'>
          <Link href='/'>HOME</Link>
          <Link href='/musics'>MUSICAS</Link>
          <Link href='/crm'>CRM</Link>
        </div>

        <div className='w-5 h-5' />
      </div>
    </div>
  )
}
