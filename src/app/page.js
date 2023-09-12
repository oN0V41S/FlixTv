import Image from 'next/image'
import Link from 'next/link'

import Naruto from '../../public/naruto.png'
import Header from './header'


export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen p-0">

      <Header></Header>
      <div id="txt_welcome" className="text-3xl text-slate-100 m-auto w-max uppercase font-bold animate-pulse">bem vindo, rafael</div>

      <div  className=' hover:animate-pulse w-max m-auto mt-10 '>
        <Link href="/header" >
          <Image
            id='user_img'
            src={Naruto}
            width={250}
            height={250}
            alt='user_img'
            className='rounded-3xl'
          />
          </Link>
      </div>

    </main>
  )
}
