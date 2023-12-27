import Link from "next/link";

export default function SubmitForm({ href, width, placeholder }) {
  return (
    <Link href={href}>
      <button
        type="submit"
        className={`bg-red-600 w-${width} lg:w-${width} rounded-md pl-6 pr-6 pt-4 pb-4`}
      >{placeholder}</button>
    </Link>
  );
}
