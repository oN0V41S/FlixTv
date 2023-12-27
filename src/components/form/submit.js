export default function SubmitForm({ width, placeholder }) {
  return (
    <button
      type="submit"
      className={`bg-red-600 w-${width} lg:w-${width} rounded-md pl-6 pr-6 pt-4 pb-4`}
    >
      {placeholder}
    </button>
  );
}
