import Image from "next/image";
import Naruto from '@/../../public/media/naruto.png'

export default function Media(props) {
  return (
    <div id="media" className="text-center w-60 m-4  ">
      <Image id="media_img" alt="" src={Naruto} className="w-max rounded-xl w-14" />
      <h1 id="media_name" className="m-auto">
        {props.name}
      </h1>
    </div>
  );
}
