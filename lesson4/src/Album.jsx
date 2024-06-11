import { useState } from "react";

export const Album = ({name, year, children}) => {
    return (
        <>
            <h2>{name} ({year})</h2>
            <p>released in {year}</p>
            {children}
        </>
    )
}