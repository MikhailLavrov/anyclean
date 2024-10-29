interface MainPriceData {
  title: string;
  price: number;
  description: string;
}

interface AddPriceData {
  title: string;
  price: number;
}

export const mainPriceData: MainPriceData[] = [
  {
    title: 'Поддерживающая уборка',
    price: 280,
    description: `Протирание подоконников и поверхностей мебели
    Протирание всех стеклянных и зеркальных поверхностей
    Чистка ковровых покрытий 
    Мытье полов
    Вынос мусора 
    Уборка санузла`,
  },
  {
    title: 'Генеральная уборка',
    price: 300,
    description: `Весь перечень «Поддерживающей» + дополнительно:
    Обеспыливание люстр и светильников
    Мытьё труб и батарей отопления
    Обеспыливание бытовой и орг. техники
    Очищение внешних поверхностей всей кухонной техники
    Мытье сантехники
    Протирка смесителей`,
  },
  {
    title: 'Уборка после ремонта',
    price: 450,
    description: `Обеспыливание стен, дверей и пола
    Мытье стен, дверей, плинтусов, полов
    Мытье подоконников и батарей отопления
    Мытьё зеркальных и стеклянных поверхностей
    Вынос мусора до 10 кг`,
  },
];

export const addPriceData: AddPriceData[] = [
  {
    title: 'Химчистка мебели',
    price: 2000,
  },
  {
    title: 'Погладить вещи',
    price: 2500,
  },
  {
    title: 'Мойка окна',
    price: 1500,
  },
  {
    title: 'Мойка люстры',
    price: 750,
  },
  {
    title: 'Мойка холодильника',
    price: 950,
  },
  {
    title: 'Мойка духового шкафа',
    price: 750,
  },
  {
    title: 'Мойка микроволновой печи',
    price: 650,
  },
];