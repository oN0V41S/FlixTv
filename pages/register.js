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

  return (
    <form className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4">
      <h1 className="font-bold text-xl text-left	">Cadastre sua conta</h1>
      <InputForm type="text" value={formData.name} placeholder="Seu primeiro e ultimo Nome" onChange={() => {handleFormEdit(e, 'name')}} required/>
      <InputForm type="email" value={formData.email} placeholder="Seu Email" onChange={() => {handleFormEdit(e, 'email')}} required/>
      <InputForm type="password" value={formData.password} placeholder="Sua Senha" onChange={() => {handleFormEdit(e, 'password')}} required/>
      <SubmitForm href="/login" width="full" placeholder="Registrar" />
      <Link href="/login" className="w-[50%]">
        já Possui conta?
      </Link>
    </form>
  );
}
