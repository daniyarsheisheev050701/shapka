import React from 'react'
import s from './Contact.module.scss'
import lok from '../../img/adres.png'
import chasy from '../../img/308937.svg'
import tel from '../../img/atel.png'
import {motion} from 'framer-motion'
const Contact = () => {
  const textAnimation ={
    hidden: {
      y:-50,
      opacity:1,
    
    },
    visible: custom=>({
      y:50,
      opacity:1,
      transition:{delay:custom*0.2},
    })
  } 
  return (
    <motion.div
    initial="hidden"
    whilenView="visible"
    className={s.ontact}>
      <div className={s.naw}> Наш магазин на карте </div>
      <div className={s.kontact}>
        <div className={s.contact}>
          <div>
            <img src={lok} alt="" width={200} />
          </div>
          <div>
            <h2 >Адрес</h2>
            <p>Москва, м. Домодедовская, ул. <br />
              Генерала Белова 43, корп. 2</p>
          </div>
        </div>

        <div className={s.contact}>
          <img src={chasy} alt="" width={160} />
          <div className={s.chas}>
          <h2>Часы работы</h2>
            <p>ежедневно<br />
               с 10 до 20 часов</p>
          </div>
        </div>

        <div className={s.contact}>
          <img src={tel} alt="" width={170} />
          <div>
            <h2>Телефон</h2>
            <p>+7 (495) 799-41-99 <br />
              +7 (909) 973-99-66  </p>
          </div>
        </div>



      </div>
      
    </motion.div>
  )
}

export default Contact

