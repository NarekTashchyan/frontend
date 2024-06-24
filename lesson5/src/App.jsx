import React, { useReducer } from "react";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import { ShopContext, initialState, reducer } from "./context";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Basket</h1>
      <ShopContext.Provider value={{ state, dispatch }}>
        <ProductList/>
        <Basket/>
      </ShopContext.Provider>
    </div>
  );
};

export default App;

