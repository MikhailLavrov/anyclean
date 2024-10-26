import { contactsData } from '../../data/contactsData';
import c from './Intro.module.css';

export const IntroComponent = () => {
  return (
    <section className={c.intro}>
      <div className={`${c.intro__container} container`}>
        <div className={c.intro__header}>
          <h2 className={c.intro__headerTitle}>Клининг - это профессия, меняющая мир вокруг вас!</h2>
          <p className={c.intro__headerSubtitle}>Задача компании <strong>{contactsData.companyName}</strong> - сделать Вашу жизнь более комфортной и позаботиться о чистоте и порядке в Вашем доме, квартире, офисе.</p>
        </div>
      </div>
    </section>
  )
}
