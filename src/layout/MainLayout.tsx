import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {
  return (
    <div className='flex flex-col bg-custom-gradient py-10 gap-10 min-h-screen'>
      <Header />

      {children}

      <Footer />
    </div>
  )
}
