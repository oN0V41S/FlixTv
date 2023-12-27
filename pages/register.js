import Link from "next/link";
import InputForm from "@/components/form/input";
import SubmitForm from "@/components/form/submit";

export default function Register() {
  return (
    <form className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4">
      <h1 className="font-bold text-xl text-left	">Register</h1>
      <InputForm type="text" placeholder="Seu primeiro e ultimo Nome" />
      <InputForm type="email" placeholder="Seu Email" />
      <InputForm type="password" placeholder="Sua Senha" />
      <SubmitForm href="/users" width="full" placeholder="Registrar" />
    </form>
  );
}
