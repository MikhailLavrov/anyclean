import c from './Price.module.css';
import { Popover } from 'antd';

const mainPriceData = [
  {
    title: 'Поддерживающая уборка',
    price: '280',
    description: `Протирание подоконников и поверхностей мебели
    Протирание всех стеклянных и зеркальных поверхностей
    Чистка ковровых покрытий 
    Мытье  полов
    Вынос  мусора 
    Уборка  санузла`,
  },
  {
    title: 'Генеральная уборка', 
    price: '300',
    description: `Весь перечень « Поддерживающей»   + дополнительно:

    Обеспыливание люстр и светильников
    Мытьё труб и батарей отопления
    Обеспыливание бытовой и  орг. техники
    Очищение внешних поверхностей всей кухонной техники
    Мытье  сантехники
    Протирка  смесителей`,
  },
  {
    title: 'Уборка после ремонта', 
    price: '450',
    description: `Обеспыливание стен,  дверей и пола
    Мытье стен,  дверей, плинтусов, полов
    Мытье подоконников и батарей отопления
    Мытьё зеркальных и стеклянных поверхностей 
    Вынос мусора до 10 кг`,
  },
];

const addPriceData = [
  {
    title: 'Химчистка мебели', 
    price: '2000'
  },
  {
    title: 'Погладить вещи', 
    price: '2500'
  },
  {
    title: 'Мойка окна', 
    price: '1500'
  },
  {
    title: 'Мойка люстры', 
    price: '750'
  },
  {
    title: 'Мойка холодильника', 
    price: '950'
  },
  {
    title: 'Мойка духового шкафа', 
    price: '750'
  },
  {
    title: 'Мойка микроволновой печи', 
    price: '650'
  },
];

export const PriceComponent = () => {
  const mainPriceItems = mainPriceData.map((item, i) => (
    <li className={c.price__item} key={i}>
      <p className={c.price__itemTitle}>
        {item.title}
        {item.description && 
          <Popover
            className={c.popover}
            content={item.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            title={item.title}
          >
            i
          </Popover>
        }
      </p>
      <span className={c.price__dots}></span>
      <p className={c.price__itemPrice}>{item.price} р/м2</p>
    </li>
  ))

  const addPriceItems = addPriceData.map((item, i) => (
    <li className={c.price__item} key={i}>
      <p className={c.price__itemTitle}>{item.title}</p>
      <span className={c.price__dots}></span>
      <p className={c.price__itemPrice}>от {item.price} р</p>
    </li>
  ))
  
  return (
    <section className={c.price} id='price'>
      <div className={`${c.price__container} container`}>
        <h2 className={c.price__header}>Наши услуги и цены</h2>
        <div className={c.price__innerContainer}>
          <div className={c.price__listContainer}>
            <div className={c.price__listWrapper}>
              <ul className={c.price__list}>
                {mainPriceItems}
              </ul>
            </div>
            <div className={c.price__listWrapper}>
              <p className={c.price__subtitle}>Дополнительные услуги</p>
              <ul className={c.price__list}>
                {addPriceItems}
              </ul>
            </div>
          </div>
          <div className={c.price__imageWrapper}>
            <img
              width={200}
              src="https://any-clean.ru/thumb/2/MAMyoiKo_jBC5UyEvzBNow/1200r/d/snimok_ekrana_2023-05-25_v_102935.png"
              alt="Cleaning"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
