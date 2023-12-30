import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import Link from "next/link";

import InputForm from "@/components/form/input";
import SubmitForm from "@/components/form/submit";

const endpoint = '/api/user/login';

export default function Login() {
  const [form, setForm] = useState({
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

    if (!form.email) return setError('O e-mail é obrigatório')
    if (!form.password) return setError('a senha é obrigatório')

    setError('')
    try {
      const response = await fetch(`/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const json = await response.json()

      if (response.status !== 200) throw new Error(json)
      setCookie('authorization', json)
      router.push('/users')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleForm} className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4">
      <div className="font-bold text-xl text-left	">Faça Login</div>
      <InputForm type="text" value={form.email} onChange={(event) => handleChangeForm(event, 'email')} placeholder="insira seu Usuário" required />
      <InputForm type="password" value={form.password} onChange={(event) => handleChangeForm(event, 'password')} placeholder="insira sua Senha" required />
      <SubmitForm onClick={handleForm} width="full" placeholder="Faça Login" />
      {error && <p id="error" className='font-bold bg-red-800 w-max p-2 pr-4 rounded-md animate-pulse m-auto'>
        {error}</p>}
      <div className="flex justify-between">
        <div className="w-[50%] flex gap-2">
          <input type="checkbox" />
          <h3 className="text-center md:text-rigth lg:text-right h-max mt-auto mb-auto">
            Me lembre
          </h3>
        </div>
        <Link
          href="/register"
          className="w-[50%] text-center md:text-rigth lg:text-right"
        >
          Não Possui conta?
        </Link>
      </div>
    </form>
  );
}
