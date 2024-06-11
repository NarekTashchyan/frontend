import Song from "./Song"

export const SongList = ({items, onDelete, add}) => {
    return (
        <div>
            <h2>Song List</h2>
            {
                items.map(elm => <Song key={elm.id}{...elm} onDelete={onDelete} add={add}/>)
            }
        </div>
    )
}