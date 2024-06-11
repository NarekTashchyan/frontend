import { useState } from "react";

function Song({id, title, artist, duration, onDelete, add, moveDown, inPlaylist=false}){
    return (
        <>
        <div className="song">
            <p>{title}</p>
            <strong>By {artist}</strong>
            <small>{duration}</small>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => {!inPlaylist ? add(id) : console.error('already in playlist')}}>add To Playlist</button>
            {
                inPlaylist ? <button onClick={() => moveDown(id)}>Move Down</button> : null
            }
        </div>
        </>
    )
}

export default Song;