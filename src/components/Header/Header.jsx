import c from './Header.module.scss';
import { DrawerComponent } from './../Drawer/Drawer';

export const HeaderComponent = () => {
  return (
    <header className={c.header}>
      <DrawerComponent />
      <div className={c.fullHeader}>
        <div className={`container`}>
          Шапка САЙТА
      </div>
      </div>
    </header>
  )
}
