import SubmitForm from "@/components/form/submit.js";
import Login from "./login.js";

export default function App() {
  return (
    <form className="flex flex-col gap-4 w-5/12">
      <h1>Faça Login</h1>
      <SubmitForm href="/login" width="80" placeholder="Login" />
      <h3>ou Registre-se vocẽ ainda não possui uma conta</h3>
      <SubmitForm href="/register" width="80" placeholder="Registrar" />
    </form>
  );
}
