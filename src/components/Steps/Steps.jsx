import c from './Steps.module.css';

const stepsData = [
  {
    title: 'Заявка',
    description: 'Заполните форму заявки на сайте, чтобы получить скидку 10% на первый заказ',
  },
  {
    title: 'Расчет',
    description: 'Ожидайте звонка нашего менеджера. Он уточнит все вопросы для расчета КП',
  },
  {
    title: 'Уборка',
    description: 'Работы будут проведены по согласованному графику',
  },
  {
    title: 'Оплата',
    description: 'После приёмки выполненных работ',
  },
];

export const StepsComponent = () => {
  const steps = stepsData.map((item, i) => (
    <li className={c.steps__item} key={i}>
      <div className={c.steps__itemHeader}>
        <div className={c.steps__itemCount}>{i + 1}</div>
        <p className={c.steps__itemTitle}>{item.title}</p>
      </div>
      <p className={c.steps__itemDescription}>{item.description}</p>
    </li>
  ))
  return (
    <section className={c.steps}>
      <div className={`${c.steps__container} container`}>
        <h2 className={c.steps__header}>С нами легко работать</h2>
        <ul className={c.steps__list}>
          {steps}
        </ul>
      </div>
    </section>
  );
};
