import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="text-white dark:text-black bg-black dark:bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
