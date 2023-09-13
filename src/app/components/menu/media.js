import Image from 'next/image'

export default function Media(props){
    return(
        <div className='w-60 h-80 m-4'>  
            <Image
            id='media_img'
            alt={props.name}
            src={props.img}  
            className='w-max h-max rounded-xl'
            />
            <h1 className='text-transparent'>{props.name}</h1>
        </div>
    )
}