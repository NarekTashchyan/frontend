export const BasketItem = ({name, price, count, onAdd, onRemove, onDelete, id}) => {
    return <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price}</td>
        <td>
            <button onClick={() => onAdd(id)}>+</button>
            <button onClick={() => onRemove(id)}>-</button>
            <button onClick={() => onDelete(id)}>X</button>
        </td>
    </tr>
}