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

  // Validar Form foi enviado
  const handleForm = (event) => {
    event.peventDefault()
    console.log(formData)
  }


  return (
    <form onSubmit={handleForm} className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4">
      <h1 className="font-bold text-xl text-left	">Cadastre sua conta</h1>
      <InputForm type="text" placeholder="Seu primeiro e ultimo Nome" required value={formData.name}/>
      <InputForm type="email" placeholder="Seu Email" required value={formData.email}/>
      <InputForm type="password" placeholder="Sua Senha" required value={formData.password}/>
      <SubmitForm width="full" placeholder="Registrar" />
      <Link href="/login" className="w-[50%]">
        já Possui conta?
      </Link>
    </form>
  );
}
