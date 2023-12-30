import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import Link from "next/link";

import InputForm from "@/components/form/input";
import SubmitForm from "@/components/form/submit";

const endpoint = "/api/user/cadastro";

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChangeForm = (event, field) => {
    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  const handleForm = async (e) => {
    e.preventDefault()

    if (!form.name) return setError('O nome é obrigatório')
    if (!form.email) return setError('O e-mail é obrigatório')
    if (!form.password) return setError('a senha é obrigatório')

    setError('')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const json = await response.json()

      if (!response.ok) throw new Error(json.message, 'Erro desconhecido')
      setCookie('authorization', json)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form
      onSubmit={handleForm}
      className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4"
    >
      <h1 className="font-bold text-xl text-left	">Cadastre sua conta</h1>
      <InputForm
        type="text"
        placeholder="Seu primeiro e ultimo Nome"
        required
        onChange={(event) => handleChangeForm(event, "name")}
        value={form.name}
      />
      <InputForm
        type="email"
        placeholder="Seu Email"
        required
        onChange={(event) => handleChangeForm(event, "email")}
        value={form.email}
      />
      <InputForm
        type="password"
        placeholder="Sua Senha"
        required
        onChange={(event) => handleChangeForm(event, "password")}
        value={form.password}
      />
      <SubmitForm width="full" onClick={handleForm} placeholder="Registrar-se" />
      {error && <p className="error">{error}</p>}
      <Link href="/login" className="w-[50%]">
        já Possui conta?
      </Link>
    </form>
  );
}
