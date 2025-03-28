import { Barlow } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Banner from '../../public/banner.webp'
import Banner1 from '../../public/banner1.webp'
import Banner2 from '../../public/banner2.webp'
import Banner3 from '../../public/banner3.webp'
import { ArrowRight, CaretRight } from '@phosphor-icons/react'

const popoins = Barlow({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function Home() {
  const scrollToPrices = () => {
    document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Ajude com amor</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
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

        <div className="w-full flex flex-col items-center gap-4 pb-6">
          <div className="relative flex flex-col items-center">
            <div
              className="w-full flex flex-col justify-start gap-14 h-[460px] px-6 py-8"
              style={{
                backgroundImage: `url(${Banner.src})`,
                backgroundSize: 'cover',
              }}
            >
              <span className="w-max flex items-center gap-1 py-[5px] px-4 text-xs text-primary font-semibold uppercase bg-white rounded-full">
                Início <CaretRight size={16} weight="bold" />{' '}
                <span className="text-secondary">Quero Apoiar</span>
              </span>

              <h1 className="w-[95%] py-[20px] px-[20px] text-3xl text-left font-semibold text-secondary bg-white uppercase rounded-tl-[38px]">
                Crianças com Câncer{' '}
                <span className="text-primary">precisam de você.</span>
              </h1>

              <button
                onClick={scrollToPrices}
                className="w-max py-[8px] px-[30px] bg-white text-[32px] text-primary font-medium uppercase rounded-bl-[38px]"
              >
                DOE <span className="text-secondary">AGORA</span>
              </button>
            </div>

            <div className="w-full h-4 bg-secondary" />

            <div className="w-full h-[150px] bg-primary" />

            <div className="absolute bottom-4 w-[90%] space-y-1 py-6 px-[30px] text-lg text-left bg-white rounded-tl-[42px]">
              <p>
                Você sabia que, enquanto muitos ainda dormem, milhares de
                crianças lutam contra o câncer sem o apoio necessário? Essa
                realidade chocante precisa da sua ação agora!
              </p>

              <p className="text-primary font-medium">
                Não deixe a esperança morrer.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <Image
              alt="banner"
              src={Banner1}
              quality={100}
              className="w-[95%] rounded-tl-2xl"
            />
          </div>

          <div className="w-[90%] space-y-4 text-left">
            <h1 className="text-2xl  font-semibold text-secondary uppercase">
              O câncer tira mais do que a saúde...{' '}
              <span className="text-primary">Ele rouba sorrisos.</span>
            </h1>

            <p>
              Mas você pode ser a luz que devolve esses sorrisos! Ao se engajar
              e apoiar iniciativas de combate ao câncer, você ajuda a
              transformar o desespero em esperança. Imagine a alegria de ver uma
              criança ou um adulto recuperar não só a saúde, mas também a
              confiança para sorrir novamente.
            </p>

            <button
              onClick={scrollToPrices}
              className="flex items-center gap-1 py-3 px-6 text-white hover:text-secondary text-sm font-medium bg-secondary hover:bg-transparent border border-secondary rounded-[150px]"
            >
              QUERO DOAR <ArrowRight size={16} weight="bold" />
            </button>
          </div>

          <div className="w-full flex justify-end">
            <Image
              alt="banner"
              src={Banner2}
              quality={100}
              className="w-[95%] rounded-tl-2xl"
            />
          </div>

          <div className="w-[90%] space-y-3 text-left">
            <h1 className="text-2xl  text-secondary font-semibold uppercase">
              Com uma doação, podemos{' '}
              <span className="text-primary">garantir tratamentos.</span>
            </h1>

            <p>
              O câncer não dá tempo para esperar. Para uma criança, cada dia
              pode ser o último. O medo e a dor são constantes, e muitas
              famílias não conseguem arcar com o tratamento. Sua doação pode
              garantir que essas crianças tenham mais um dia, mais uma chance.
            </p>

            <button
              onClick={scrollToPrices}
              className="flex items-center gap-1 py-3 px-6 text-white hover:text-secondary text-sm font-medium bg-secondary hover:bg-transparent border border-secondary rounded-[150px] uppercase"
            >
              Fazer doação <ArrowRight size={16} weight="bold" />
            </button>
          </div>

          <div className="w-full flex justify-end">
            <Image
              alt="banner"
              src={Banner3}
              quality={100}
              className="w-[95%] rounded-tl-2xl"
            />
          </div>

          <div className="w-[90%] space-y-3 text-left">
            <h1 className="text-2xl  text-secondary font-semibold uppercase">
              Doe agora e ajude uma criança{' '}
              <span className="text-primary">a continuar lutando!</span>
            </h1>

            <p>
              Não espere mais. Cada doação faz a diferença na vida de uma
              criança. Doe agora e ajude a salvar uma vida.
            </p>
          </div>

          <div className="w-[90%] space-y-1">
            <div className="w-full h-5 overflow-hidden bg-[#D8D8D8] rounded-full">
              <div className="w-[3.3%] h-full flex items-center bg-secondary">
                <span className="text-xs font-semibold ml-4">3.3%</span>
              </div>
            </div>

            <div className="flex justify-between mx-2 font-semibold text-lg text-primary">
              <span>ARRECADADO</span>

              <span>META</span>
            </div>

            <div className="flex justify-between mx-2 font-semibold text-lg">
              <span className=" text-secondary">R$ R$ 1.237.550,50</span>

              <span className="text-[#A5A5A5]">R$ R$ 10.000.000,00</span>
            </div>
          </div>

          <div
            style={{ boxShadow: '0px 0px 10px 2px #00000050' }}
            className="w-[90%] p-5 space-y-3 text-center text-white font-semibold bg-primary rounded-2xl"
          >
            <p className="text-2xl uppercase">
              nenhuma vida
              <br /> deveria ter preço!
            </p>

            <button
              onClick={scrollToPrices}
              className="w-full py-4 px-6 bg-secondary text-white text-lg font-semibold rounded-2xl hover:scale-105 transition-transform duration-150"
            >
              DOAR AGORA!
            </button>
          </div>

          <div id="precos" className="space-y-4 text-center text-primary">
            <h2 className="text-xl font-semibold uppercase">
              Quantos você{' '}
              <span className="text-secondary">deseja ajudar?</span>
            </h2>

            <p className="text-lg text-[#7A7A7A]">
              Toda ajuda feita de coração será bem-vinda!
            </p>

            <div className="grid grid-cols-2 gap-5">
              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 20
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 40
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 50
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 100
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 200
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 300
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 400
              </a>

              <a
                href="/finalizar-doacao"
                style={{ boxShadow: '0px 0px 10px 1px #00000030' }}
                className="w-[90%] mx-auto py-2 bg-secondary hover:bg-transparent text-white hover:text-secondary text-center font-semibold border border-secondary rounded-2xl transition-colors duration-200"
              >
                R$ 1000
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
