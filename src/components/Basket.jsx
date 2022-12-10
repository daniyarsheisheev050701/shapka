import React, { useContext } from 'react'
import {Appcontext} from '../Appconext'
import card from '../img/card.png'
const Basket = () => {
    const [cart, setCart] =useContext(Appcontext)
    const removeproduct = (id) =>{
        setCart(cart.filter(item => item.id !== id))
    }
  return (
    <div>
      {cart.length ? (
        <div>
          {cart.map(item => (
            <div key={item.id}>
                <img src={item.image} alt="img" />
              <p>{item.price}</p>
              <h1>{item.name}</h1> 
              <button onClick={() => removeproduct(item.id)}>-</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <img src={card} alt="" />
          <h1>У вас нет заказов :(</h1>
        </div>
      )}
    </div>
  )
}

export default Basket