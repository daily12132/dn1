import { Barlow } from 'next/font/google'
import Head from 'next/head'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

const popoins = Barlow({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Ajude com amor</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col justify-between items-center text-center bg-[#F1F1F1] ${popoins.className}`}
      >
        <Header />

        <div className="w-full flex flex-col items-center gap-4 pb-8"></div>

        <Footer />
      </main>
    </>
  )
}
