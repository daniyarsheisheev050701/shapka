import React from 'react'
import { useState } from 'react'
import s from './Girllike.module.scss'
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
import plusI from '../../img/tplus.svg'
import plused from '../../img/plus.svg'
const Girllike = ({item}) => {
    const [like,setLike]=useState(false)
    const [plus, setPlus] = useState(false)
    function anClick(){
      setLike(! like)
    }
    function amClick() {
        setPlus(!plus)
      }
    return (
        <div>
            <div className={s.content}>
                <img src={item.image} alt="" />
                <h2>{item.price}</h2>
                <h5> {item.name}</h5>
                
                <div className={s.like}>
                <img
                style={{width:'35px'}}
                onClick={anClick}
                src={like ? likedImg :likeImg}
                alt="like"/>
                </div>
                <div className={s.plus}>
        <img
            style={{ width: '35px' }}
            onClick={amClick}
            src={plus ? plused : plusI}
            alt="plus" />
        </div>
            </div>

        </div>
    )
}

export default Girllike