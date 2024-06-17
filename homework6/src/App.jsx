import { useEffect, useState } from 'react'
import { ProductList } from './components/ProductList'
import { ProductItem } from './components/ProductItem'
import { Basket } from './components/Basket'
import { BasketItem } from './components/BasketItem'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  useEffect(() => {
    fetch('http://localhost:3004/books')
      .then(res => res.json())
      .then(res => {
        setProducts(res)
      })
  }, [])
  function total(items){
    let sum = 0;
    for(let i = 0; i < items.length; i++){
      sum += items[i].price * items[i].count;
      }
      return sum;
  }
  function addBasket(id){
    const item = products.find(product => product.id === id)
    if (basket.includes(item)){
      const index = basket.findIndex(elm => elm === item)
      basket[index].count += 1
      basket[index].subtotal = basket[index].count * basket[index].price
      setBasket([...basket])
    }else{
      item.count = 1

      setBasket([...basket, item])
    }
    
  }
  function addCount(id){
    const item = products.find(product => product.id === id)
    const index = basket.findIndex(elm => elm === item)
    basket[index].count += 1
    basket[index].subtotal = basket[index].count * basket[index].price
    setBasket([...basket])
  }
  function removeCount(id){
    const item = products.find(product => product.id === id)
    const index = basket.findIndex(elm => elm === item)
    if (basket[index].count > 1){
      basket[index].count -= 1
      basket[index].subtotal -= basket[index].price
      setBasket([...basket])
    }else{
      setBasket(basket.filter(elm => elm !== item))
    }
  }
  function removeItem(id){
    const item = products.find(product => product.id === id)
    setBasket(basket.filter(elm => elm !== item))
  }
  return (
    <>
      <div className='list'>
        <ProductList items={products} onMove={addBasket}></ProductList>
        <Basket items={basket} onAdd={addCount} onRemove={removeCount} onDelete={removeItem} totalPrice={total}></Basket>
      </div>
    </>
  )
}

export default App
