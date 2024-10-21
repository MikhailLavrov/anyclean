import c from './Header.module.css';
import { DrawerComponent } from './../Drawer/Drawer';
import { Link } from 'react-router-dom';

const headerMenu = [
  {
    title: 'Главная',
    href: '#home',
    key: 'home',
  },
  {
    title: 'Услуги',
    href: '#services',
    key: 'services',
  },
  {
    title: 'Цены',
    href: '#price',
    key: 'price',
  },
  {
    title: 'Ответы на вопросы',
    href: '#questions',
    key: 'questions',
  },
  {
    title: 'Контакты',
    href: '#contacts',
    key: 'contacts',
  },
];

export const HeaderComponent = () => {
  const menuItems = headerMenu.map((item, i) => {
    return (
      <li className={c.header__menuItem} key={i}>
        <Link to={item.link}>
          {item.title}
        </Link>
      </li>
    )
  })

  return (
    <header className={c.header}>
      <div className={`${c.header__container} container`}>
        <ul className={c.header__menu}>
          {menuItems}
        </ul>
        <DrawerComponent />
      </div>
    </header>
  )
}
