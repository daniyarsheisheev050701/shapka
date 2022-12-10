import React from 'react'
import {useContext, useState } from 'react'
import { Appcontext} from '../../Appconext'
import s from '../Tovar/Tovar.module.scss'
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
import plusI from '../../img/tplus.svg'
import plused from '../../img/plus.svg'
const Tovar = ({ item }) => {
  const [like, setLike] = useState(false)
  
  const [add, setAdd] = useState(plusI)
  function addToCart(product) {
    setAdd(!add)
    setCart([...cart, product])
  }
  const { setCart, cart } = useContext(Appcontext)
  
  function anClick() {
    setLike(!like)

  } 

  
  return (
    <div>
      <div className={s.content}>
        <div> <img src={item.image} alt="" /></div>
        <div> <h2>{item.price}</h2></div>
        <div> <h5>{item.name}</h5></div>
        <div className={s.like} >
          <img
            style={{ width: '35px' }}
            onClick={anClick}
            src={like ? likedImg : likeImg}
            alt="like" />
        </div>
        <div className={s.plus}>
        <img
            style={{ width: '35px' }}
            onClick={()=>addToCart(item)}
            src={add ? plusI : plused}
            alt="plus" />
        </div>
      </div>
    </div>
  )
}

export default Tovar
