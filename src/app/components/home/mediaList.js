export default function MediaList ({ children }){
    const props = {
        categoria: "Filmes",
      };
      
    return(
    <div className="text-white ml-10 capitalize font-bold text-xl m-0">
        <div> {props.category}  </div>
        <div id="catalogo" className="flex gap-4">{children}</div>
    </div>
    )
}