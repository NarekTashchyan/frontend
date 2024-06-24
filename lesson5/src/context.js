import React from 'react';

export const ShopContext = React.createContext();

export const initialState = {
  basket: [],
  products: [
    { id: 1, name: 'cs for idiots', price: 10.99, photo:'https://m.media-amazon.com/images/I/51oH30X-pmL._AC_UF1000,1000_QL80_.jpg'},
    { id: 2, name: 'cracking coding interviews', price: 9.99, photo:'https://ia804606.us.archive.org/BookReader/BookReaderPreview.php?id=crackingcodingin0000mcdo_k7r4&subPrefix=crackingcodingin0000mcdo_k7r4&itemPath=/19/items/crackingcodingin0000mcdo_k7r4&server=ia804606.us.archive.org&page=leaf1&fail=preview&&scale=4&rotate=0'},
    { id: 3, name: 'no bullshit guide to linalg', price: 19.99, photo:'https://m.media-amazon.com/images/I/71ZQFbtXWBL._AC_UF1000,1000_QL80_.jpg'},
    { id: 4, name: 'data structures and algorithms', price:99.99, photo:'https://rukminim2.flixcart.com/image/850/1000/jl5h3m80/book/0/7/7/introduction-to-algorithms-original-imaf8cfwr7edgndb.jpeg?q=20&crop=false'},
    { id: 5, name: 'Node design patterns', price:49.99, photo:'https://content.packt.com/B15729/cover_image_large.jpg'}
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BASKET': {
      const item = state.products.find(product => product.id === action.payload);
      const existingItem = state.basket.find(basketItem => basketItem.id === action.payload);

      if (existingItem) {
        const updatedBasket = state.basket.map(basketItem =>
          basketItem.id === action.payload
            ? {
                ...basketItem,
                count: basketItem.count + 1,
                subtotal: (basketItem.count + 1) * basketItem.price,
              }
            : basketItem
        );
        return { ...state, basket: updatedBasket };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...item, count: 1, subtotal: item.price }],
        };
      }
    }

    case 'ADD_COUNT': {
      const updatedBasket = state.basket.map(basketItem =>
        basketItem.id === action.payload
          ? {
              ...basketItem,
              count: basketItem.count + 1,
              subtotal: (basketItem.count + 1) * basketItem.price,
            }
          : basketItem
      );
      return { ...state, basket: updatedBasket };
    }

    case 'REMOVE_COUNT': {
      const updatedBasket = state.basket
        .map(basketItem =>
          basketItem.id === action.payload
            ? basketItem.count > 1
              ? {
                  ...basketItem,
                  count: basketItem.count - 1,
                  subtotal: (basketItem.count - 1) * basketItem.price,
                }
              : null
            : basketItem
        )
        .filter(basketItem => basketItem !== null);

      return { ...state, basket: updatedBasket };
    }

    case 'REMOVE_ITEM': {
      const updatedBasket = state.basket.filter(basketItem => basketItem.id !== action.payload);
      return { ...state, basket: updatedBasket };
    }

    default:
      return state;
  }
};

