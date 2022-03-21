import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <hr />
      <span>Im here to stay (Header)</span>
    </header>
    {children}
    <footer>
      <hr />
      <span>Im here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
