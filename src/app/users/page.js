import Naruto from '../../static/naruto.png'
import Sasuke from '../../static/sasuke.jpg'
import UserView from '../components/users/userView'
import Header from '../components/layout/header'
import '../style.css'

export default function users(){
    return(
        <body className="bodyC">
            <Header/>
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