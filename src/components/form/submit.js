export default function SubmitForm({href, width, placeholder, onClick }) {
  return (
    <button
      type="submit"
      className={`bg-red-600 w-${width} lg:w-${width} rounded-md pl-6 pr-6 pt-4 pb-4`}
      onClick={onClick}
    >
      {placeholder}
    </button>
  );
}
