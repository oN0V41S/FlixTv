import Image from 'next/image'
import './media.css'
import Naruto from '../../../../public/naruto.png'


export default function Media(props){
    return(
        <div className='text-center w-60 h-max m-4 text-transparent hover:text-white '>  
            <Image
            id='media_img'
            alt=""
            src={Naruto}  
            className='w-max h-max rounded-xl'
            />
            <h1 id='media_name' className='m-auto'>{props.name}</h1>
        </div>
    )
}