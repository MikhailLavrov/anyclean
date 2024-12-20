import c from './Intro.module.css';
import LOGO_IMG from '../../assets/logo_sub.svg';
import { contactsData } from '../../data/contactsData';

export const IntroComponent = () => {
  return (
    <section className={c.intro}>
      <div className={`${c.intro__container} container`}>
        <div className={c.logo}>
          <img width={200} src={LOGO_IMG} alt='Логотип' />
        </div>
        <div className={c.contacts}>
          <div className={c.phone}>
            <p className={c.phone__title}>Телефон:</p>
            <a className={c.phone__number} href={`tel:${contactsData.phone}`}>{contactsData.phoneMasked}</a>
          </div>
          <div className={c.openingHours}>
            <p className={c.openingHours__text}>{contactsData.openingHours}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
