import { BasketItem } from "./BasketItem";

export const Basket = ({ items, onAdd, onRemove, onDelete, totalPrice }) => {
    return (
        <div>
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
                    {items.map(item => (
                        <BasketItem
                            key={item.id}
                            {...item}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            onDelete={onDelete}
                        />
                    ))}
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'right' }}>Total:</td>
                        <td>{totalPrice(items)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
