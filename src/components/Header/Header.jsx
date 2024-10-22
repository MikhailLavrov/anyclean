import c from './Header.module.css';
import { DrawerComponent } from './../Drawer/Drawer';
import { useNavigate } from 'react-router-dom';

const headerMenu = [
  {
    title: 'Главная',
    key: '',
  },
  {
    title: 'Услуги и цены',
    key: 'price',
  },
  {
    title: 'Часто задаваемые вопросы',
    key: 'questions',
  },
  {
    title: 'Контакты',
    key: 'contacts',
  },
];

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('', { replace: true });
  };

  const menuItems = headerMenu.map((item, i) => {
    return (
      <li className={c.header__menuItem} key={i}>
        {item.key.length !== 0 ? (
          <a href={`#${item.key}`}>{item.title}</a>
        ) : (
          <span onClick={scrollToTop}>{item.title}</span>
        )}
      </li>
    );
  });

  return (
    <header className={c.header}>
      <div className={`${c.header__container} container`}>
        <ul className={c.header__menu}>
          {menuItems}
        </ul>
        <DrawerComponent />
      </div>
    </header>
  );
};
