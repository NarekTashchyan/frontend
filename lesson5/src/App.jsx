import { useState } from 'react'
import { ProductList } from './components/ProductList'
import { ProductItem } from './components/ProductItem'
import { Basket } from './components/Basket'
import { BasketItem } from './components/BasketItem'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'cs for idiots', price: 10.99, photo:'https://m.media-amazon.com/images/I/51oH30X-pmL._AC_UF1000,1000_QL80_.jpg'},
    { id: 2, name: 'cracking coding interviews', price: 9.99, photo:'https://ia804606.us.archive.org/BookReader/BookReaderPreview.php?id=crackingcodingin0000mcdo_k7r4&subPrefix=crackingcodingin0000mcdo_k7r4&itemPath=/19/items/crackingcodingin0000mcdo_k7r4&server=ia804606.us.archive.org&page=leaf1&fail=preview&&scale=4&rotate=0'},
    { id: 3, name: 'no bullshit guide to linalg', price: 19.99, photo:'https://m.media-amazon.com/images/I/71ZQFbtXWBL._AC_UF1000,1000_QL80_.jpg'},
    { id: 4, name: 'data structures and algorithms', price:99.99, photo:'https://rukminim2.flixcart.com/image/850/1000/jl5h3m80/book/0/7/7/introduction-to-algorithms-original-imaf8cfwr7edgndb.jpeg?q=20&crop=false'},
    { id: 5, name: 'Node design patterns', price:49.99, photo:'https://content.packt.com/B15729/cover_image_large.jpg'}
  ])
  const [basket, setBasket] = useState([])
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
  function sale(){
    for (let i in basket){
      if (basket[i].count >= 3){
        basket[i].subtotal = (basket[i].count - 1) * basket[i].price
      }
    }
    basket.sale = true
    setBasket([...basket])
  }
  return (
    <>
      <div className='list'>
        <ProductList items={products} onMove={addBasket}></ProductList>
        <Basket items={basket} onAdd={addCount} onRemove={removeCount} onDelete={removeItem} onSale={sale}></Basket>
      </div>
    </>
  )
}

export default App
