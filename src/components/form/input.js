export default function InputForm({ type,  ...props }) {
  return (
    <input
      type={type}
      className="bg-slate-600 rounded-md pl-6 pr-6 pt-4 pb-4 lg:w-80 border-none outline-none "
      {...props}
      required
    />
  );
}
