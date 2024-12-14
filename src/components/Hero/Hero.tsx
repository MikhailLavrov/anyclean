import c from './Hero.module.css';
import { CallbackForm } from '../CallBackForm/CallBackForm';
import HERO_IMAGE from '../../assets/hero_img.webp';
import { useState } from 'react';

export const HeroComponent = () => {
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE);
  const [inputValue, setInputValue] = useState('');

  const ImageSrcInput = () => {
    const onSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      setImgSrc(inputValue);
    };

    return (
      <form className={c.srcInput__wrapper} onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Адрес картинки"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    );
  };

  return (
    <section className={c.hero}>
      <div className={`${c.hero__container} container`}>
        {/* <ImageSrcInput /> */}
        <img src={imgSrc} width={200} height={200} alt="Фон" />
        <CallbackForm />
      </div>
    </section>
  );
};
