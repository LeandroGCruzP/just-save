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

      <div className='bg-custom-gradient flex flex-col items-center min-h-screen py-10'>
        <div className='flex flex-col w-full max-w-[1440px] content-between min-h-screen gap-10'>
          <Header />

          {children}

          <Footer />
        </div>
      </div>
    </>
  )
}
