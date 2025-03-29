import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import Logo from '../../public/logo1.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="relative w-full px-4 py-8 space-y-4 text-left bg-white border-t shadow-sm">
        <Image
          alt="logo"
          src={Logo}
          width={80}
          className="absolute right-12 top-12"
        />

        <div>
          <h1 className="text-2xl text-primary font-medium mb-1">
            REDES SOCIAIS
          </h1>

          <div className="flex gap-2 text-secondary">
            <a href="#">
              <InstagramLogo size={32} />
            </a>
            <a href="#">
              <FacebookLogo size={32} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl text-primary font-medium mb-1">LEGAL</h1>

          <a href="#" className="text-secondary font-medium">
            Quem Somos
          </a>

          <a href="#" className="text-secondary font-medium">
            Contato
          </a>

          <a href="#" className="text-secondary font-medium">
            Política de Privacidade
          </a>
          <a className="text-secondary font-medium">Política de Cookies</a>
        </div>

        <h1>Faça a diferença, compartilhe com seus amigos!</h1>

        <button
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: 'olha isso!',
                  text: 'vamos ajudar!',
                  url: window.location.href, // Compartilha o link da página atual
                })
                .catch((error) => console.error('Erro ao compartilhar:', error))
            } else {
              alert('Compartilhamento não suportado neste navegador.')
            }
          }}
          className="px-4 py-3 bg-secondary text-white font-semibold rounded-2xl"
        >
          COMPARTILHAR
        </button>
      </footer>
      <div className="w-full py-2 text-white text-sm bg-[#7A7A7A]">
        <span> © 2025 – campanhadocancer.org</span>
      </div>
    </>
  )
}

export default Footer
