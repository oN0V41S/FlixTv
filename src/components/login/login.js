import Link from "next/link";
import "@/app/globals.css";
import InputForm from "@/app/form/input";

export default function LoginForm() {
  return (
    <form className="mt-3 m-auto w-12/12 lg:w-max p-16 rounded-xl text-white bg-slate-900">
      <div className="flex flex-col gap-6">
        <div className="font-bold text-xl text-left	">Faça Login</div>
        <InputForm placeholder="insira seu Usuário" />
        <InputForm placeholder="insira sua Senha" />
      </div>
      <div className="mt-10">
        <Link href="/users">
          <input
            type="submit"
            className="bg-red-600 w-full lg:w-80 rounded-md pl-6 pr-6 pt-4 pb-4 "
          ></input>
        </Link>
        <div className="flex mt-4">
          <div className="w-2/4 flex gap-2">
            <input type="checkbox" />
            <div>Me lembre</div>
          </div>
          <div className="w-2/4 text-right">Precisa de Ajuda?</div>
        </div>
      </div>
    </form>
  );
}
