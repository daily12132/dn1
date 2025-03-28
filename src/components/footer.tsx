import Image from 'next/image'
import Logo from '../../public/logo.svg'

const Footer = () => {
  return (
    <>
      <footer className="w-full p-4 space-y-4 bg-white border-t shadow-sm">
        <Image
          alt="logo"
          src={Logo}
          quality={100}
          width={150}
          className="mx-auto"
        />

        <h1>Faça a diferença, compartilhe com seus amigos!</h1>

        <button className="px-5 py-3 bg-primary text-white rounded-md">
          Compartilhar
        </button>
      </footer>
    </>
  )
}

export default Footer
