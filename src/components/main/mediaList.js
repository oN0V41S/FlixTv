
export default function MediaList ( {children , categoria} ){
    return(
    <div className="text-white ml-10 capitalize font-bold text-xl m-0">
        <div> {categoria} </div>
        <div id="catalogo" className="flex gap-4">{children}</div>
    </div>
    )
}