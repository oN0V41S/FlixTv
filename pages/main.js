import MdCaroussel from "@/components/main/MediaCaroussel";
import Media from "@/components/main/media.js";
import MediaList from "@/components/main/mediaList.js";

export default function main() {
  return (
    <main className="gap-12 flex flex-col">
      <MdCaroussel categoria="Continue assistindo" />
      <MdCaroussel categoria="Comédia" />
      <MdCaroussel categoria="Ação" />
      <MdCaroussel categoria="Aventura" />
      <MdCaroussel categoria="Séries" />
    </main>
  );
}
