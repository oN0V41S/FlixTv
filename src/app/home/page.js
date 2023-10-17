import Header from "../components/layout/header";

import Media from "../components/home/media";
import MediaList from "../components/home/mediaList";
import Carousel from "../components/home/carousel";
import Naruto from '../../static/naruto.png'

export default function menu(){
    return(
        <body>
            <Header/>
            <main className="gap-12 flex flex-col">
                <Carousel/>
                <div id="user_choose" className="text-white ml-10 capitalize font-bold text-xl">
                    <div>Continue assistindo</div>
                    <div id="catalogo" className="flex gap-4">
                        <Media name="naruto" />
                        <Media name="Avengers Ultimato parte 2"/>
                    </div>
                </div>

                <MediaList category="Comédia">
                   <Media name="Salve Jorge"/>
                   <Media name="Black Mirror"/>

                </MediaList>
            </main>
        </body>
    )
}