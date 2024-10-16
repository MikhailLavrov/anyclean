import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import c from './Drawer.module.scss'

export const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} className={c.burger} />
      <Drawer className={'header__drawer'} onClose={onClose} open={open}>
        <p>Главная</p>
        <p>Услуги</p>
        <p>Цены</p>
        <p>Ваши вопросы</p>
        <p>Контакты</p>
      </Drawer>
    </>
  );
};
