import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import c from './Drawer.module.css'
import { Image } from "antd";
import LOGO_IMG from '../../assets/logo.svg';
import { MenuOutlined } from '@ant-design/icons';

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
      <Button onClick={showDrawer} icon={<MenuOutlined />} className={c.burger__button} />
      <Drawer 
        className={'header__drawer'} 
        onClose={onClose} 
        open={open}
        title={<Image width={100} src={LOGO_IMG} preview={false} />}
      >
        <p>Главная</p>
        <p>Услуги</p>
        <p>Цены</p>
        <p>Ваши вопросы</p>
        <p>Контакты</p>
      </Drawer>
    </>
  );
};
