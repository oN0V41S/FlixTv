import MdCaroussel from "@/components/main/MediaCaroussel";
import Media from "@/components/main/media.js";
import MediaList from "@/components/main/mediaList.js";

export default function main() {
    return (
        <main className="gap-12 flex flex-col">
            <MediaList categoria="Comédia">
                <Media name="Salve Jorge" />
                <Media name="Black Mirror" />
            </MediaList>
            <MdCaroussel/>
        </main>
    )
}