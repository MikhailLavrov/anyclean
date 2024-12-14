import { addPriceData, mainPriceData } from '../../data/priceData';
import c from './Price.module.css';
import { Popover } from 'antd';
import PRICE_IMG from '../../assets/price_img.webp';
import { useState } from 'react';

export const PriceComponent = () => {
  const [imgSrc, setImgSrc] = useState(PRICE_IMG);
  const [inputValue, setInputValue] = useState('');

  const mainPriceItems = mainPriceData.map((item, i) => (
    <li className={c.price__item} key={item.title}>
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

  const ImageSourceSet = () => {
    const onSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      setImgSrc(inputValue)
    }

    return (
      <form
        action=""
        onSubmit={onSubmitHandler}
      >
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value={'ok'} />
      </form>
    )
  }
  
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
            {/* <ImageSourceSet /> */}
            <img
              width={200}
              src={imgSrc}
              alt="Cleaning"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
