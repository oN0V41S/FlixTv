import MainCaroussel from "@/components/main/MainCaroussel";
import MdCaroussel from "@/components/main/MediaCaroussel";

export default function main() {
  return (
    <>
      <section>
        <MainCaroussel />
      </section>
      <section className="gap-12 flex flex-col">
        <MdCaroussel categoria="Continue assistindo" />
        <MdCaroussel categoria="Comédia" />
        <MdCaroussel categoria="Ação" />
        <MdCaroussel categoria="Aventura" />
        <MdCaroussel categoria="Séries" />
      </section>
    </>
  );
}
