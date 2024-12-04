import { contactsData } from '../../data/contactsData';
import c from './About.module.css';

export const AboutComponent = () => {
  return (
    <section className={c.about}>
      <div className={`${c.about__container} container`}>
        <div className={c.about__header}>
          <h2 className={c.about__headerTitle}>Клининг - это профессия, меняющая мир вокруг вас!</h2>
          <p className={c.about__headerSubtitle}>Задача компании <strong>{contactsData.companyName}</strong> - сделать Вашу жизнь более комфортной и позаботиться о чистоте и порядке в Вашем доме, квартире, офисе.</p>
        </div>
      </div>
    </section>
  )
}
