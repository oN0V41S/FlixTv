import Link from "next/link.js";

export default function App() {
  return (
    <form className="flex flex-col gap-4 w-5/12 mt-14">
      <h1>Faça Login</h1>
      <Link href="/login" className="bg-red-900 pl-8 -4 pr-8 rounded-sm w-max ">Login</Link>
    </form>
  );
}
