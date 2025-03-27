import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Logo2 from '../../public/favicon.svg'
import Banner from '../../public/banner.webp'

const roboto = Roboto({
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
        className={`w-full min-h-screen flex flex-col justify-between items-center bg-[#F1F1F1] ${roboto.className}`}
      >
        <header className="w-full flex justify-around p-4 bg-white border-b shadow-sm">
          <Image alt="logo" src={Logo} quality={100} width={150} />
          <button
            className="py-2 px-6 bg-primary hover:bg-[#438fde] text-white font-semibold rounded-md transition-colors duration-200"
            style={{ boxShadow: '0px 0px 10px 2px #00000050' }}
            onClick={scrollToPrices}
          >
            DOAR!
          </button>
        </header>

        <div className="w-[95%] py-5 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold">SAÚDE / TRATAMENTOS</p>

            <p className="text-xs font-semibold">ID: 3304857135</p>

            <h2 className="text-2xl font-semibold leading-7">
              “Tem dias que eu peço pra Deus me levar”. Sofrendo com feridas
              abertas, que nunca cicatrizam, Bruno pede socorro!
            </h2>

            <p className="text-xs font-semibold">BRASÍLIA / FEDERAL DISTRICT</p>
          </div>

          <Image
            alt="banner"
            src={Banner}
            quality={100}
            className="w-full rounded-md"
          />

          <div className="space-y-1">
            <p className="text-xs font-semibold">
              Vaquinha criada em: 14/01/2025
            </p>

            <div>
              <h2 className="text-lg text-secondary">META</h2>

              <div className="w-full h-5 overflow-hidden bg-[#D8D8D8] rounded-full">
                <div className="w-[3.3%] h-full flex items-center bg-secondary">
                  <span className="text-xs font-semibold ml-4">3.3%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mx-2 font-semibold text-lg text-primary">
              <span>ARRECADADO</span>

              <span>META</span>
            </div>

            <div className="flex justify-between mx-2 font-semibold text-lg">
              <span className=" text-secondary">R$ 5.650,00</span>

              <span className="text-[#A5A5A5]">R$ 150.000,00</span>
            </div>
          </div>

          <div
            style={{ boxShadow: '0px 0px 10px 2px #00000050' }}
            className="w-full p-5 space-y-3 text-center text-white font-semibold bg-[#EE7026] rounded-md"
          >
            <p className="text-2xl uppercase">
              nenhuma vida
              <br /> deveria ter preço!
            </p>

            <button
              className="w-full py-4 px-6 bg-primary hover:bg-[#438fde] text-white font-semibold rounded-md transition-colors duration-200"
              style={{ boxShadow: '0px 0px 10px 2px #00000030' }}
              onClick={scrollToPrices}
            >
              DOAR AGORA!
            </button>
          </div>

          <div className="w-full h-[1px] bg-[#E7E7E7]" />

          <div className="text-lg text-[#7A7A7A] space-y-3">
            <h3 className="text-2xl text-black font-semibold">Sobre:</h3>

            <p>✅História verificada</p>

            <p>
              Bruno vive em um corpo que dói o tempo todo. A dor é tanta que,
              várias vezes, ele já
              <strong>
                pediu a Deus para morrer porque não aguenta mais sofrer
              </strong>
              .
            </p>

            <p>
              Ele&nbsp;tem&nbsp;<strong>Epidermólise Bolhosa</strong>,&nbsp;uma
              doença genética rara que&nbsp;
              <strong>
                faz sua pele se encher de bolhas que estouram facilmente,
                formando feridas abertas e extremamente dolorosas, que nunca
                cicatrizam
              </strong>
              .&nbsp;E sem os curativos certos, para evitar infecções, tudo
              piora.
            </p>

            <p>
              “Eu tenho dificuldade pra deitar, esticar as pernas, o joelho
              trava, às vezes nem consigo andar.&nbsp;<strong>Tudo dói</strong>
              .”
            </p>

            <p>
              Além da dor física,&nbsp;
              <strong>Bruno sofre preconceito desde criança</strong>.&nbsp;
            </p>

            <p>
              Hoje com 25 anos,
              <strong>
                &nbsp;Bruno não terminou os estudos por causa do bullying
              </strong>
              . As outras crianças o chamavam de&nbsp;
              <strong>“sarnento”</strong>&nbsp;e se afastavam dele com medo de
              “pegar” a doença – mesmo Epidermólise Bolhosa não sendo
              contagiosa.
            </p>

            <p>
              “Até hoje eu recebo olhares e comentários que&nbsp;
              <strong>me deixam mal</strong>.”
            </p>

            <h3>
              <strong>Por que Bruno precisa da nossa ajuda?</strong>
            </h3>

            <p>
              Bruno mora com a mãe em Senador Amaral (MG). Ele não pede muito,
              só quer uma vida com menos dor porque,&nbsp;
              <strong>até aqui, foi só isso: dor e sofrimento</strong>.
            </p>

            <p>
              “Eu queria poder jogar bola, fazer exercício, erguer peso… mas a
              doença não deixa.&nbsp;
              <strong>Isso me deixa chateado e triste</strong>.”
            </p>

            <p>
              Infelizmente, ele&nbsp;
              <strong>
                não consegue pelo SUS todos os curativos especiais, pomadas e
                insumos que precisa para proteger sua pele
              </strong>
              . Sua mãe faz o que pode, mas não consegue arcar com tudo sozinha.
            </p>

            <h3>
              <strong>Para onde vai sua doação:</strong>
            </h3>

            <p>
              A vaquinha é para garantir os curativos especiais, pomadas e
              medicamentos que o Bruno precisa por pelo menos seis meses.&nbsp;
            </p>

            <p>
              <strong>Sobre nossas campanhas</strong>
            </p>

            <p>
              Apuramos e verificamos todas as histórias antes de serem
              publicadas. Assim, você pode doar com total segurança, sabendo que
              sua contribuição vai realmente fazer a diferença na vida de quem
              precisa. Após o encerramento da campanha, compartilhamos nas
              nossas redes sociais o destino das doações e a transformação que
              elas geraram&nbsp;na vida dessas pessoas.
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#E7E7E7]" />

          <div id="precos" className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold">
              Quantos você deseja ajudar?
            </h2>

            <p className="text-lg text-[#7A7A7A]">
              Toda ajuda feita de coração será bem-vinda!
            </p>

            <div className="grid grid-cols-2 gap-5">
              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=78b606b9-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 20
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=996d6f79-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 40
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=a376d0b6-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 50
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=ac5c6e50-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 100
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=b7de7a62-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 200
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=c293c9d8-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 300
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=cbfcea09-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 400
              </a>

              <a
                target="_blank"
                href="https://pagamento.institutodacaridade.online/checkout?product=d45d9485-09c5-11f0-8fa3-46da4690ad53"
                style={{ boxShadow: '0px 0px 10px 1px #00000050' }}
                className="w-[90%] mx-auto py-2 bg-primary hover:bg-[#438fde] text-white text-center font-semibold rounded-md transition-colors duration-200"
                rel="noreferrer"
              >
                R$ 1000
              </a>
            </div>

            <div className="w-full h-[1px] bg-[#E7E7E7]" />

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Doe amor, doe esperanças!
              </h2>

              <Image
                alt="logo"
                src={Logo2}
                quality={100}
                width={111}
                className="mx-auto"
              />

              <p className="text-[#7A7A7A]">
                Sua ajuda pode fazer a total diferença para Bruno…
              </p>
            </div>
          </div>
        </div>

        <footer className="w-full flex flex-col items-center p-4 gap-3 bg-[#7A7A7A]">
          <Image alt="logo" src={Logo2} quality={100} width={45} />

          <span className="text-white text-[10px]">
            © 2025 – institutodacaridade.com
          </span>
        </footer>
      </main>
    </>
  )
}
