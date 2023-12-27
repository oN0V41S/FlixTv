import { useState } from 'react'

import Link from "next/link";

import InputForm from "@/components/form/input";
import SubmitForm from "@/components/form/submit";

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleFormEdit = (event,name) => {
    setFormData({
      // Insere todos dados de formData em setFormData
      ...formData,
      //
      [name]: event.target.value
    })
  } 

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      const response = await fetch('/api/user/cadastro', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const [erro, setErro] = useState

      const json = await response.json()
      if(response.status !== 201) throw new Error(json)

    } catch (err){

    }
  }

  return (
    <form className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4">
      <h1 className="font-bold text-xl text-left	">Cadastre sua conta</h1>
      <InputForm type="text" value={formData.name} placeholder="Seu primeiro e ultimo Nome" onChange={(event) => {handleFormEdit(event, 'name')}} required/>
      <InputForm type="email" value={formData.email} placeholder="Seu Email" onChange={(event) => {handleFormEdit(event, 'email')}} required/>
      <InputForm type="password" value={formData.password} placeholder="Sua Senha" onChange={(event) => {handleFormEdit(event, 'password')}} required/>
      <SubmitForm width="full" placeholder="Registrar" onClick={handleForm} />
      <Link href="/login" className="w-[50%]">
        já Possui conta?
      </Link>
    </form>
  );
}
