import { Barlow } from 'next/font/google'
import Head from 'next/head'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft } from '@phosphor-icons/react'

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

        <div className="w-[90%] text-left space-y-4 py-6">
          <a
            href="/"
            className="w-max flex items-center gap-1 text-primary text-sm font-semibold"
          >
            <ArrowLeft size={18} weight="bold" />
            <span>VOLTAR</span>
          </a>

          <h1 className="text-primary text-2xl">QUEM SOMOS</h1>
          <p>
            Nossa Campanha do Câncer, um movimento dedicado a apoiar crianças e
            jovens em tratamento contra o câncer, oferecendo tratamento e todo
            apoio necessario trabalhamos para impulsionar o potencial dessas
            crianças e ajudá-las a vencer essa batalha.
          </p>
          <p>
            Desde 1994, acreditamos que a educação é uma ferramenta poderosa de
            superação e esperança. Mesmo em tempos de luta, as crianças podem
            descobrir sua força interior, vencer desafios e encontrar sua
            própria linha de chegada. A Campanha do Câncer tem como objetivo
            levar vida a essas crianças além de educação de qualidade, apoio
            emocional e motivação para essas crianças, para que elas nunca
            deixem de acreditar em um futuro vitorioso. Estamos aqui para ajudar
            a transformar suas vidas, com a força da educação, coragem e
            esperança.
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}
