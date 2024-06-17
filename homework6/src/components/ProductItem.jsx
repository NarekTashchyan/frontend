export const ProductItem = ({name, id, price, photo, onMove}) => {
    return <div>
        <img src={photo} alt="photo" />
        <p>{name}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={() => onMove(id)}>move</button>
    </div>
}