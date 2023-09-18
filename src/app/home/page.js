import Naruto from '../../../public/naruto.png'
import Sasuke from '../../../public/sasuke.jpg'
import UserView from '../components/home/userView'
import './home.module.css'

export default function HP(){
    return(
        <body id='body'>
            <main>
                <div id="txt_welcome" className="text-3xl text-slate-100 mt-8 m-auto w-max uppercase font-bold">bem vindo</div>

                <div id='user_list' className='flex gap-8 w-max m-auto mt-18'>
                    <UserView name="Miguel" img={Naruto}/>
                    <UserView name="Rafael" img={Sasuke}/>
                </div>

            </main>
        </body>
    )
}