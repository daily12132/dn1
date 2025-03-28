'use-client'

import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import * as z from 'zod'
import axios from 'axios'
import { ArrowLeft } from '@phosphor-icons/react'
import {
  formatCelular,
  formatCpf,
  formatDataNascimento,
} from '@/hooks/formatFields'
import { Header2 } from '@/components/header'
import Footer from '@/components/footer'
import Pix from '../../public/pix.svg'
import Image from 'next/image'

const schema = z.object({
  nome: z
    .string()
    .min(3, 'Digite seu nome completo.')
    .includes(' ', { message: 'Digite seu sobrenome.' }),
  email: z.string().email('E-mail inválido.'),
  cpf: z.string().min(14, 'CPF inválido.'),
  phone: z.string().min(15, 'Telefone inválido.'),
  birthDate: z.string().min(10, 'Data de nascimento inválida.'),
})

type schema = z.infer<typeof schema>

const popoins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function Home() {
  const [step, setStep] = useState(0)
  const [errorMensage, setErrorMensage] = useState('')
  const [userForm, setUserForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    phone: '',
    birthDate: '',
  } as schema)

  const steps = [
    { label: 'Identificação' },
    { label: 'Pagamento' },
    { label: 'Confirmação' },
  ]

  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setErrorMensage('')
    setStep((prevStep) => prevStep - 1)
  }

  const validarForm = async (event: FormEvent) => {
    event.preventDefault()

    const validationResult = schema.safeParse(userForm)

    if (validationResult.success) {
      try {
        // Enviar os dados para a API usando Axios
        const response = await axios.post('/api/form', validationResult.data)

        // Verificar se a resposta foi bem-sucedida
        if (response.status === 201) {
          console.log('Dados salvos com sucesso:', response.data)
          setStep(1) // Avançar para o próximo passo
        } else {
          throw new Error('Erro ao salvar os dados.')
        }
      } catch (error) {
        // Se houve erro, exibir a mensagem
        setErrorMensage('Erro ao salvar os dados. Tente novamente.')
        console.error(error)
      }
    } else {
      // Se a validação falhar, exibir as mensagens de erro
      const errorMessages = validationResult.error.errors.map(
        (err) => err.message,
      )
      setErrorMensage(errorMessages.join(' '))
    }
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
        className={`w-full min-h-screen flex flex-col justify-between items-center text-center ${popoins.className}`}
      >
        <Header2 />

        <div className="w-[90%] py-6 space-y-4">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center justify-between">
              {steps.map((s, index) => {
                const isActive = index === step
                const isCompleted = index < step

                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <p
                      className={`w-[45px] h-[45px] flex items-center justify-center rounded-full text-white
                ${isActive ? 'bg-primary' : isCompleted ? 'bg-none' : 'bg-gray-300 text-gray-500'}`}
                    >
                      {isCompleted ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48px"
                          height="48px"
                          fill="none"
                          viewBox="0 0 28 28"
                        >
                          <path
                            fill="#06A651"
                            d="M14 2.625C7.7 2.625 2.625 7.701 2.625 14S7.701 25.375 14 25.375 25.375 20.299 25.375 14c0-1.224-.164-2.444-.602-3.582l-1.421 1.395c.174.7.273 1.4.273 2.187A9.596 9.596 0 0 1 14 23.625 9.596 9.596 0 0 1 4.375 14 9.596 9.596 0 0 1 14 4.375c2.625 0 4.983 1.046 6.645 2.707l1.23-1.23C19.862 3.838 17.063 2.625 14 2.625m9.871 3.746L14 16.242l-3.746-3.746-1.258 1.258 4.375 4.375.629.601.629-.601 10.5-10.5z"
                          ></path>
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </p>
                    <p
                      className={`text-xs ${isActive || isCompleted ? 'text-black' : 'text-gray-500'}`}
                    >
                      {s.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {step === 1 && (
            <div
              onClick={prevStep}
              className="w-max flex items-center gap-1 text-primary text-sm font-semibold"
            >
              <ArrowLeft size={18} weight="bold" />
              <span>VOLTAR</span>
            </div>
          )}

          <div className="w-full p-6 text-left border border-[#cccaca] rounded-md">
            <h1 className="mb-4 text-xl font-medium">Resumo da sua doação</h1>

            <p>R$20,00</p>

            <p>Doação Unica</p>
          </div>

          {step === 0 ? (
            <div className="text-left">
              <h1 className="mb-4 text-xl font-medium">Doar como:</h1>

              <form onSubmit={validarForm} className="w-full max-w-md mx-auto">
                <div className="mb-4 space-y-1">
                  <label className="block text-sm font-medium">
                    Nome Completo
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Escreva o seu nome"
                    className="w-full py-[10px] px-4 rounded-md border border-[#ced4da] outline-primary"
                    value={userForm.nome}
                    onChange={(e) =>
                      setUserForm((prevRegister) => ({
                        ...prevRegister,
                        nome: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mb-4 space-y-1">
                  <label className="block text-sm font-medium">E-mail</label>
                  <input
                    required
                    type="email"
                    placeholder="nome@mail.com"
                    className="w-full py-[10px] px-4 rounded-md border border-[#ced4da] outline-primary"
                    value={userForm.email}
                    onChange={(e) =>
                      setUserForm((prevRegister) => ({
                        ...prevRegister,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mb-4 space-y-1">
                  <label className="block text-sm font-medium">CPF</label>
                  <input
                    required
                    className="w-full py-[10px] px-4 rounded-md border border-[#ced4da] outline-primary"
                    type="text"
                    placeholder="000.000.000-00"
                    value={formatCpf(userForm.cpf)}
                    onChange={(e) =>
                      setUserForm((prevRegister) => ({
                        ...prevRegister,
                        cpf: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mb-4 space-y-1">
                  <label className="block text-sm font-medium">Telefone</label>
                  <input
                    required
                    className="w-full py-[10px] px-4 rounded-md border border-[#ced4da] outline-primary"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formatCelular(userForm.phone)}
                    onChange={(e) =>
                      setUserForm((prevRegister) => ({
                        ...prevRegister,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mb-4 space-y-1">
                  <label className="block text-sm font-medium">
                    Data de Nascimento
                  </label>
                  <input
                    required
                    className="w-full py-[10px] px-4 rounded-md border border-[#ced4da] outline-primary"
                    type="text"
                    placeholder="dd/mm/aaaa"
                    value={formatDataNascimento(userForm.birthDate)}
                    onChange={(e) =>
                      setUserForm((prevRegister) => ({
                        ...prevRegister,
                        birthDate: e.target.value,
                      }))
                    }
                  />
                </div>

                {errorMensage && (
                  <div className="text-[red]">{errorMensage}</div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md"
                >
                  Ir para o pagamento
                </button>
              </form>
            </div>
          ) : step === 1 ? (
            <div>
              <div className="flex items-center gap-1 font-semibold text-primary">
                <Image
                  alt="logo"
                  src={Pix}
                  quality={100}
                  className="w-[22px]"
                />
                <span>Formas de pagamento</span>
              </div>

              <p className="text-xs text-left">
                Para finalizar seu pedido escolha uma forma de pagamento
              </p>

              <div className="p-5 mt-4 text-left space-y-3 border border-[#cccaca] rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-secondary p-[3px] rounded-[50%]">
                    <div className="w-full h-full bg-primary rounded-[50%]" />
                  </div>

                  <span>PIX</span>
                </div>

                <p className="font-semibold">Atente-se aos detalhes</p>

                <p>
                  Pagamentos via pix são confirmados imediatamente. Você não
                  precisa ter uma chave pix para efetuar o pagamento, basta ter
                  o app do seu banco em seu celular.
                </p>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white text-lg py-3 rounded-md"
                >
                  DOAR AGORA!
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <Footer />
      </main>
    </>
  )
}
