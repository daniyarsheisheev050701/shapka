import React from 'react'
import s from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.con}>
                <div className={s.b1}>
                    <h3>Покупателям</h3>
                    <p>Контакты и время работы</p>
                    <p>Способы доставки</p>
                    <p>Способы оплаты</p>
                    <p>О нашей компании</p>
                    <p>Как определить размер головы</p>
                    <p>Возврат и обмен</p>
                    <p>Другие частые вопросы</p>
                </div>
                <div className={s.b2}>
                    <h3>Мы в соцсетях</h3>
                    <p>Вконтакте</p>
                    <p>Одноклассники</p>
                    <p>YouTube</p>
                    <h4>Отзывы на Яндексе</h4>
                </div>
                <div>
                    <h3>Компания</h3>
                    <p>Новые товары</p>
                    <p>Свяжитесь с нами</p>
                    <p>Карта сайта</p>
                    <p>Магазины</p>
                    <p>Товары со скидкой</p>
                </div>
                <div>
                    <h3>Ваша учетная запись</h3>
                    <p>Личные данные</p>
                    <p>Заказы</p>
                    <p>Кредитные квитанции</p>
                    <p>Адреса</p>
                    <p>Купоны</p>
                </div>
            </div>
            <div className={s.end}>
               <p> SHAPKA.RU Интернет-магазин головных уборов.</p>
            </div>

        </div>


    )
}

export default Footer