import Image from 'next/image'
import Link from 'next/link'

import Naruto from '@/../public/media/naruto.png'
import Sasuke from '@/../public/media/sasuke.jpg'

export default function Users() {
    return (
        <div id='user_list' className='flex gap-8 w-max m-auto mt-18'>
            <UserView name="Miguel" img={Naruto} />
            <UserView name="Rafael" img={Sasuke} />
        </div>
    )
}

function UserView(props) {
    return (
        <div id="user" className=' w-max mt-10 '>
            <Link href="/main" >
                <Image
                    id='user_img'
                    src={props.img}
                    width={250}
                    height={250}
                    alt={props.alt}
                    className='rounded-xl'
                />
                <div id='user_name' className="text-xl text-slate-100 mt-2 m-auto w-max uppercase font-bold">{props.name}</div>
            </Link>
        </div>
    )
}