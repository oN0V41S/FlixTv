import Media from "@/components/main/media.js";
import MediaList from "@/components/main/mediaList.js";

export default function main() {
    return (
        <main className="gap-12 flex flex-col">
            <div
                id="user_choose"
                className="text-white ml-10 capitalize font-bold text-xl"
            >
                <div>Continue assistindo</div>
                <div id="catalogo" className="flex gap-4">
                    <Media name="naruto" />
                    <Media name="Avengers Ultimato parte 2" />
                </div>
            </div>

            <MediaList>
                <Media name="Salve Jorge" />
                <Media name="Black Mirror" />
            </MediaList>
        </main>
    );
}