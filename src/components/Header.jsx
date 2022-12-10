import React, { useState } from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { FaShoppingCart } from "react-icons/fa";
import Basket from './Basket.jsx'
const Header = () => {
  let [cartOpen,setCartOpen]=useState(false)
 
  return (
    <div className={s.menu}>
      <NavLink to='/'>
        <img src={logo} alt="" />
      </NavLink>

      <div className={s.comp}>
        <NavLink to='/girl'>
          ЖЕНСКИЕ
        </NavLink>
        <NavLink to='/man'>
          МУЖСКИЕ
        </NavLink>
        <NavLink to='/baby'>
          ДЕТСКИЕ
        </NavLink>
        <NavLink>
          АКСЕССУАРЫ
        </NavLink>
        <NavLink>
          РАСПРОДАЖА
        </NavLink>
        <NavLink>
          ОПТ
        </NavLink>
        <div className={s.korz}>
      
        <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={s.korzina} />
        {cartOpen &&(
            <div className={s.kor}>
              <Basket/>
             </div>
        )}
          
        
        </div>
      </div>
     
    </div>
  )
}

export default Header