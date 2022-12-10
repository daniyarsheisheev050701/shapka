import React, { useContext } from 'react'
import Carousel from '../Carusel/Carusel'
import s from './Block.module.scss'
import Contact from '../Contact/Contact'
import Tovar from '../Tovar/Tovar'
import Search from '../Search/Search'
import { useState } from 'react'
import { Appcontext } from '../../Appconext'
const Block = () => {
  const {con} = useContext(Appcontext)
  const [value, setValue] = useState('')
  const allData = con.filter(item => item.name.toLowerCase().includes(value))
  return (
    <div >
      <Carousel />
      <Search setValue={setValue} value={value}  />
      <div className={s.com}>
        {
          allData.map(item => (
            <Tovar item={item} key={item.id}/>
          ))
        }
      </div>
      <Contact />
    </div>
  )
}

export default Block