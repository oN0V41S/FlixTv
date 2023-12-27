import Link from "next/link";
import "@/app/globals.css";
import InputForm from "@/components/form/input";
import SubmitForm from "@/components/form/submit";

export default function Login() {
  return (
    <form className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900 flex flex-col gap-4">
      <div className="font-bold text-xl text-left	">Faça Login</div>
      <InputForm type="text" placeholder="insira seu Usuário" />
      <InputForm type="password" placeholder="insira sua Senha" />
      <SubmitForm href="/users" width="full" />
      <div className="w-[50%] flex gap-2">
        <input type="checkbox" />
        <div>Me lembre</div>
      </div>
      <div className="w-[50%] text-right">Precisa de Ajuda?</div>
    </form>
  );
}
