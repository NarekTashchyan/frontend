import Song from "./Song"
export const PlayList = ({items, add, onDelete, moveDown}) => {
    return <>
        <h1>songs{items.length}</h1>
        {items.map(elm => <Song key={elm.id}{...elm} onDelete={onDelete} add={add} moveDown={moveDown}/>)}
    </>
}