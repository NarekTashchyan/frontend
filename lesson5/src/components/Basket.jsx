import { useState } from "react";
import { BasketItem } from "./BasketItem"

export const Basket = ({items, onAdd, onRemove, onDelete, onSale, sale=false}) => {
    const [isSale, setIsSale] = useState(sale);

    const handleSaleClick = () => {
        setIsSale(true);
        onSale();
    };
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                    {
                            !isSale && (
                                <th>
                                    <button onClick={handleSaleClick}>sale</button>
                                </th>
                            )
                        }
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => <BasketItem key={item.id}{...item} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} onSale={onSale}/>)
                }
            </tbody>
        </table>
    </div>
}