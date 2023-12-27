import SubmitForm from "@/components/form/submit.js";
import Login from "./login.js";

export default function App() {
  return (
    <form className="flex flex-col gap-4 w-5/12 mt-14">
      <h1>Faça Login</h1>
      <SubmitForm href="/login" width="80" placeholder="Login" />
      <span className="m-4" />
    </form>
  );
}
