export default function MediaList ({children}){
    return(
    <div className="text-white ml-10 capitalize font-bold text-xl m-0">
        <div> Comédia </div>
        <div id="catalogo" className="flex gap-4">{children}</div>
    </div>
    )
}