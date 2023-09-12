import Image from 'next/image'


import Logo from '../../public/FlixTV-transformed.png'

export default function Header(){
    return(
        <header>
            <Image
                src={Logo}
                className='m-auto pt-2'
                width={120}
            />
        </header>
    )
}