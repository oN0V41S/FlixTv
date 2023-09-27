import Header from "../components/layout/header";
import Media from "../components/menu/media";

import Naruto from '../../../public/naruto.png'
import MediaList from "../components/menu/mediaList";
import Carrosel from "../components/menu/carousel";

export default function Menu(){
    return(
        <body>
            <Header/>
            <main className="gap-12 flex flex-col">
                <Carrosel/>
                <div id="user_choose" className="text-white ml-10 capitalize font-bold text-xl">
                    <div>Continue assistindo</div>
                    <div id="catalogo" className="flex gap-4">
                        <Media img={Naruto} name="naruto"/>
                        <Media img={Naruto} name="Avengers Ultimato parte 2"/>
                    </div>
                </div>

                <MediaList category="Comédia">
                   <Media img={Naruto} name="Salve Jorge"/>
                   <Media img={Naruto} name="Black Mirror"/>

                </MediaList>
            </main>
        </body>
    )
}