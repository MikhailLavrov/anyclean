import c from './Hero.module.css';
import LOGO_IMG from '../../assets/logo_sub.svg';

export const HeroComponent = () => {
  return (
    <section className={c.hero}>
    <div className={`${c.hero__container} container`}>
        <div className={c.logo}>
          <img width={200} src={LOGO_IMG} alt='Logo' />
        </div>
        <div className={c.contacts}>
          <div className={c.phone}>
            <p className={c.phone__title}>Телефон:</p>
            <a className={c.phone__number} href="tel:+79160857799">+7 (916) 085-77-99</a>
          </div>
          <div className={c.openingHours}>
            <p className={c.openingHours__text}>с 7:00 до 21:00 без выходных</p>
          </div>
        </div>
      </div>
    </section>
  )
}
