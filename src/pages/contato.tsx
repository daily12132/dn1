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

          <h1 className="text-primary text-2xl">CONTATO</h1>
          <p>
            O diálogo e o contato são formas de garantir a construção coletiva.
            Todo tipo de sugestão e ideia é bem-vinda!
          </p>
          <p>
            Caso queira falar conosco sobre doações, brindes ou atualização de
            dados, entre em contato por meio da nossa central de relacionamento
            com o doador: 0800 789 2510 (de segunda a sexta-feira das 9h às
            19h). Ou envie um e-mail para: campanhadocancer@greenpeace.org.
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}
