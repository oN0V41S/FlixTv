import Image from 'next/image'

import Logo from '../../../static/FlixTV-transformed.png'
import Link from 'next/link'

export default function Header(){
    return(
        <header>
            <Link href="/" className='flex w-22 m-auto p-0'>
                <Image
                    src={Logo}
                    className='w-max m-auto'
                    width={120}
                />
            </Link>
        </header>
    )
}