import React from 'react'
import s from './Search.module.scss'
const Search = ({setValue,value}) => {

  return (
    <div className={s.tovar}>
      <h1>Рекомедации</h1>
      <input type="search"
      placeholder='search...'
      value={value}
      onChange={e=>setValue(e.target.value)}/>
    </div>
  )
}

export default Search