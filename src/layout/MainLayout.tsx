import Head from 'next/head'
import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>Just Save</title>
      </Head>

      <div className='flex flex-col items-center bg-custom-gradient py-10 gap-10 min-h-screen'>
        <div className='w-full max-w-[1440px] flex flex-col content-between h-screen'>
          <Header />

          {children}

          <Footer />
        </div>
      </div>
    </>
  )
}
