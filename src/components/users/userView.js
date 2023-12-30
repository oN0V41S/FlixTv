import Image from "next/image";
import Link from "next/link";

import Naruto from "@/../public/media/naruto.png";
import Sasuke from "@/../public/media/sasuke.jpg";

export default function Users() {
  return (
    <div id="user_list" className="flex gap-8 w-max m-auto mt-18">
      <UserView name="Miguel" img={Naruto} />
      <UserView name="Rafael" img={Sasuke} />
    </div>
  );
}

function UserView(props) {
  return (
    <Link href="/main" className="w-32 lg:w-56 mt-10 ">
      <Image
        id="user_img"
        src={props.img}
        alt='user'
        className="rounded-xl w-full"
      />
      <div
        id="user_name"
        className="text-xl text-slate-100 mt-2 m-auto w-max uppercase font-bold"
      >
        {props.name}
      </div>
    </Link>
  );
}
