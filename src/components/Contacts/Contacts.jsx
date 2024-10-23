import c from './Contacts.module.css';
import MAP from '../../assets/map.webp';
import { ClockCircleOutlined, EnvironmentOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { SocialButtons } from '../SocialButtons/SocialButtons';
import { contactsData } from './../../data/contactsData';

export const ContactsComponent = () => {
  return (
    <section className={c.contacts} id='contacts'>
      <div className={`${c.contacts__container} container`}>
        <h2 className={c.contacts__header}>Наши контакты</h2>
        <div className={c.contacts__innerContainer}>
          <div className={c.contacts__infoWrapper}>
            <div className={c.contacts__item}>
              <ClockCircleOutlined />
              <p>{contactsData.openingHours}</p>
            </div>
            <div className={c.contacts__item}>
              <MobileOutlined />
              <a href="tel:+79160857799">{contactsData.phone}</a>
            </div>
            <div className={c.contacts__item}>
              <EnvironmentOutlined />
              <a href="yandexnavi://build_route_on_map?lat_to=55.614417&lon_to=37.481055">{contactsData.address}</a>
            </div>
            <div className={c.contacts__item}>
              <MailOutlined />
              <a href="mailto:anyclean@mail.ru">{contactsData.email}</a>
            </div>
            <SocialButtons wrapperClassName={c.socialsWrapper} />
          </div>
          <div className={c.contacts__map}>
            <img width={200} src={MAP} alt="Карта" />
          </div>
        </div>
      </div>
    </section>
  );
};
