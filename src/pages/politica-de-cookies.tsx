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
          <h1 className="text-primary text-2xl uppercase">
            Política de cookies
          </h1>

          <p>
            Quando você acessa nosso site, são armazenados pequenos arquivos em
            seu software navegador, denominados popularmente como “cookies”, a
            fim de identificar o seu dispositivo de acesso. Tais arquivos são
            utilizados, entre outros casos, para fins de segurança,
            personalização e customização da experiência, bem como a ativação de
            funcionalidades.
          </p>
          <p>
            O IAS utiliza cookies próprios e de terceiros para diversas funções,
            como possibilitar e facilitar a utilização do site institucional e
            das plataformas, bem como de suas funcionalidades/ações, acompanhar
            as suas preferências, persistir informações relacionadas a suas
            atividades nos ambientes visitados, coletar informações para o envio
            de comunicações e conteúdo mais personalizados, diminuir a
            ocorrência de falhas durante o acesso, mitigar o risco de atividades
            fraudulentas, garantir uma navegação mais personalizável, oferecer
            recursos de segurança durante a navegação, e analisar de forma
            estatística as preferências gerais do conjunto de
            visitantes/usuários.
          </p>
          <p>
            Caso não queira utilizar cookies, você poderá, a qualquer momento,
            bloquear o uso dos cookies ativando uma configuração no seu
            navegador de internet, sendo que a capacidade desse bloqueio
            dependerá das configurações e limitações do seu navegador. Em caso
            de bloqueio de cookies, o site institucional e as plataformas
            administradas poderão não funcionar corretamente e as suas
            funcionalidades também poderão estar parcial ou totalmente
            indisponíveis.
          </p>
          <p>
            Para administrar os seus cookies, recomendamos que clique nas
            configurações do seu navegador, e confira as instruções relacionadas
            ao uso, bloqueio e exclusão de cookies. Caso tenha interesse em
            encontrar mais detalhes, abaixo, estão listadas as instruções dos
            navegadores mais populares: (A) Google Chrome; (B) Mozilla Firefox;
            (C) Safari; (D) Internet Explorer; (E) Microsoft Edge; e (F) Opera.
          </p>
          <p>
            Por fim, ressalta-se que os cookies, bem como demais dados pessoais
            eventualmente coletados por nós, seguem as diretrizes dispostas em
            nossa Política de Privacidade, que dispõe acerca de todas nossas
            atividades de tratamento de seus dados pessoais.
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}
