import Users from "@/components/users/userView";

export default function users() {
  return (
    <section>
      <div
        id="txt_welcome"
        className="text-2xl text-slate-100 mt-8 m-auto w-max uppercase font-bold"
      >
        bem vindo
      </div>
      <Users />
    </section>
  );
}
