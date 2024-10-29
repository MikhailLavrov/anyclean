interface ContactsData {
  companyName: string;
  openingHours: string;
  phone: string;
  phoneMasked: string;
  address: string;
  lat: number;
  lon: number;
  email: string;
  telegram: string;
  whatsapp: string;
}

export const contactsData: ContactsData = {
  companyName: 'AnyClean',
  openingHours: 'с 7:00 до 21:00 без выходных',
  phone: '+79160857799',
  phoneMasked: '+7 (916) 085-77-99',
  address: 'Москва, Новомосковский административный округ, Филимонковский район, Московский, улица Хабарова, 2',
  lat: 55.593873,
  lon: 37.351905,
  email: 'anyclean@mail.ru',
  telegram: 'https://t.me/anyclean',
  whatsapp: 'https://api.whatsapp.com/send?phone=79160857799',
};
