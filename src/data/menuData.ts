export interface HeaderMenuItem {
  title: string;
  key: string;
}

export const headerMenu: HeaderMenuItem[] = [
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
