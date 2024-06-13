import { BasketItem } from "./BasketItem"

export const Basket = ({items, onAdd, onRemove, onDelete}) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => <BasketItem key={item.id}{...item} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>)
                }
            </tbody>
        </table>
    </div>
}