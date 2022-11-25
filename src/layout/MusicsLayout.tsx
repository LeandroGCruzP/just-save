import Link from 'next/link'
import { ReactNode } from 'react'

interface MusicsLayoutProps {
  children: ReactNode
}

export function MusicsLayout ({ children }: MusicsLayoutProps) {
  return (
    <div className='px-10'>
      <div className='text-primary text-sm flex gap-4 pb-10'>
        <Link href=''>LETRAS</Link>
        {/* <Link href=''>CIFRAS</Link> */}
      </div>

      {children}
    </div>
  )
}
