export default function InputForm({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-slate-600 rounded-md pl-6 pr-6 pt-4 pb-4 lg:w-80 border-none outline-none "
    />
  );
}
