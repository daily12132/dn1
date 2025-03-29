import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../public/logo.svg'
import { CaretDown, CaretLeft, List, X } from '@phosphor-icons/react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Função para fechar ao clicar fora da aba
  const handleCloseOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.target instanceof HTMLDivElement &&
      event.target.id === 'overlay'
    ) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="w-full flex items-center justify-between px-5 py-4 bg-white border-b shadow-sm">
      <a href="/">
        <Image alt="logo" src={Logo} quality={100} width={180} />
      </a>

      <div className="p-1 bg-primary text-white rounded-md">
        <List
          size={32}
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer"
        />
      </div>

      {isMenuOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-[#00000050] z-20"
          onClick={handleCloseOutsideClick}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-[60%] h-full bg-white z-30 shadow-lg transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 mb-5 border-b">
          <Image alt="logo" src={Logo} quality={100} width={140} />

          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <div className="w-full flex flex-col text-left px-3 space-y-2">
          <div className="w-full bg-white shadow-md rounded-lg overflow-hidden border border-primary">
            <button
              className={`w-full flex items-center justify-between px-4 py-2 text-primary font-semibold ${
                isOpen ? 'border-b border-primary' : ''
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Como ajudar?
              {isOpen ? (
                <CaretDown weight="bold" size={20} />
              ) : (
                <CaretLeft weight="bold" size={20} />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="px-4 text-sm">
                Você pode ajudar fazendo uma doação e compartilhando com seus
                familiares para que mais pessoas também contribuam!
              </p>
            </div>
          </div>

          <a href="/" className="text-primary underline font-semibold">
            Início
          </a>

          <a href="#" className="text-primary underline font-semibold">
            Quem Somos
          </a>

          <a href="#" className="text-primary underline font-semibold">
            Contato
          </a>

          <a href="#" className="text-primary underline font-semibold">
            Política de Privacidade
          </a>

          <p>Faça a diferença, compartilhe com seus amigos!</p>

          <button
            className="w-full px-5 py-3 bg-primary text-white font-semibold rounded-lg"
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: 'olha isso!',
                    text: 'vamos ajudar!',
                    url: window.location.href, // Compartilha o link da página atual
                  })
                  .catch((error) =>
                    console.error('Erro ao compartilhar:', error),
                  )
              } else {
                alert('Compartilhamento não suportado neste navegador.')
              }
            }}
          >
            COMPARTILHAR
          </button>
        </div>
      </div>
    </header>
  )
}

export const Header2 = () => {
  return (
    <header className="w-full p-5 bg-white border-b shadow-sm">
      <Image
        alt="logo"
        src={Logo}
        quality={100}
        width={180}
        className="mx-auto"
      />
    </header>
  )
}
