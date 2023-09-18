import Link from 'next/link'
import './login.css'

export default function Login(){
    return(
        <body id='body'>
            <main className=''>
                <div id='login' className='mt-12 m-auto w-max p-16 rounded-xl'>
                    <div className='flex flex-col gap-6'>
                        <div className='font-bold text-xl text-left	'>Sign in</div>
                        <input type='text' placeholder='insira seu Usuário' className='bg-slate-600 rounded-md pl-6 pr-6 pt-4 pb-4 w-80 '/>
                        <input type='text' placeholder='insira sua Senha' className='bg-slate-600 rounded-md pl-6 pr-6 pt-4 pb-4 '/>
                    </div>
                    <div className='mt-10'>
                        <Link href='/home' >
                            <input type='submit' className='bg-red-600 w-80 rounded-md pl-6 pr-6 pt-4 pb-4 '/>
                        </Link>
                        <div className='flex mt-4'>
                            <div className='w-2/4 flex gap-2'>
                                <input type='checkbox'/>
                                <div>Me lembre</div>
                            </div>
                            <div className='w-2/4'>
                                <div className='text-right'>Precisa de Ajuda?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}