import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './Girl.module.scss'
import Girllike from './Girllike';
export default function SimpleAccordion({ gon }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h2>ШАПКИ ЖЕНСКИЕ</h2> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={s.text}>
              <p>
              Огромный выбор женских моделей предлагает наш магазин, в ассортименте головные уборы на все сезоны и на любой вкус. Мы работаем только с проверенными производителями и с качественными товарами. 100% товара проходит предпродажный контроль. Мы закупаем огромными партиями, и поэтому можем предложить минимальные цены. Отсортируйте товар выбрав подкатегорию, также пользуйтесь фильтрами, которые расположены слева внизу.
              </p>
            </div>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className={s.com}>
        {gon.map(item => (
          <Girllike item={item} key={item.id}/>
        ))  

        }

      </div>
    </div>
  );
}





