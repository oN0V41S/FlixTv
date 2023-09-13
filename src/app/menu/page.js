import Media from "../components/menu/media";

import Naruto from '../../../public/naruto.png'
import MediaList from "../components/menu/mediaList";

export default function Menu(){
    return(
        <body >
            <main className="gap-12 flex flex-col">
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