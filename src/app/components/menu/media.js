import Image from 'next/image'

export default function Media(props){
    return(
        <div className='text-center w-60 h-80 m-4 text-transparent hover:text-white '>  
            <Image
            id='media_img'
            alt={props.name}
            src={props.img}  
            className='w-max h-max rounded-xl'
            />
            <h1>{props.name}</h1>
        </div>
    )
}