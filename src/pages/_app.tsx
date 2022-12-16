import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '~/layouts'
import '../styles/globals.css'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>
  }
}

export default function App ({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <Layout.MainLayout>
      {Component.PageLayout
        ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
          )
        : (
          <Component {...pageProps} />
          )}
    </Layout.MainLayout>
  )
}
