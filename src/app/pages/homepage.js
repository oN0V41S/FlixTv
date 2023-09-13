import Header from '../components/layout/header'
import Naruto from '../../../public/naruto.png'
import Sasuke from '../../../public/sasuke.jpg'
import UserView from '../components/homepage/userView'

export default function HP(){
    return(
        <body>
            <main className="bg-slate-900 min-h-screen p-0">
                <Header></Header>
                <div id="txt_welcome" className="text-3xl text-slate-100 mt-8 m-auto w-max uppercase font-bold">bem vindo,</div>

                <div id='user_list' className='flex gap-8 w-max m-auto mt-24'>
                    <UserView name="Miguel" img={Naruto}/>
                    <UserView name="Rafael" img={Sasuke}/>
                </div>

            </main>
        </body>
    )
}