import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { MainLayout } from '../layout/MainLayout'
import '../styles/globals.css'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>
  }
}

export default function App ({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <MainLayout>
      {Component.PageLayout
        ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
          )
        : (
          <Component {...pageProps} />
          )}
    </MainLayout>
  )
}
