import Link from 'next/link'
import './login.css'

import Header from '../components/layout/header'
import LoginTest from '../components/login/login'

export default function Login(){
    return(
        <body>
            <Header/>
            <main className=''>
                <LoginTest/>
            </main>
        </body>
    )
}