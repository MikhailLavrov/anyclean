import c from './Header.module.css';
import { DrawerComponent } from './../Drawer/Drawer';
import { headerMenu } from '../../data/menuData';
import { MenuLink } from '../MenuLink/MenuLink';
import { SocialButtons } from './../SocialButtons/SocialButtons';

export const HeaderComponent = () => {
  const menuItems = headerMenu.map((item, i) => {
    return (
      <li className={c.header__menuItem} key={i}>
        <MenuLink item={item} />
      </li>
    );
  });

  return (
    <header className={c.header}>
      <div className={`${c.header__container} container`}>
        <ul className={c.header__menu}>
          {menuItems}
        </ul>
        <SocialButtons wrapperClassName={c.socialsWrapper}/>
        <DrawerComponent />
      </div>
    </header>
  );
};
