import Header from "../components/layout/header";
import Media from "../components/menu/media";

import Naruto from '../../../public/naruto.png'

export default function Menu(){
    return(
        <body >
            <Header/>

            <main className="bg-slate-900 min-h-screen p-0">
                <div className="text-white m-10 capitalize font-bold text-xl">
                    <div>Continue assistindo</div>
                    <div id="catalogo">
                        <Media img={Naruto} name="naruto"/>
                    </div>
                </div>
            </main>
        </body>
    )
}