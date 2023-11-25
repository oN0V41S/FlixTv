import Image from 'next/image'
import Link from 'next/link'

export default function UserView(props){
    return(
        <div id="user" className=' w-max mt-10 '>
            <Link href="/home" >
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