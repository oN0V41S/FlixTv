import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/../../public/flixtv.png'

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