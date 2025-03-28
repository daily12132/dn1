import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../public/logo.svg'
import { List, X } from '@phosphor-icons/react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <Image alt="logo" src={Logo} quality={100} width={180} />

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
        className={`fixed top-0 right-0 w-64 h-full bg-white z-30 shadow-lg transform transition-transform ${
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
