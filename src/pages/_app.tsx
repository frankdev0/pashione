import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  )
}
