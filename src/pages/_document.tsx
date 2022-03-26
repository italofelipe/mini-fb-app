import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
        <link
          href="http://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}