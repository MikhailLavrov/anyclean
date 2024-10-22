import c from './Questions.module.css';
import { Collapse } from 'antd';

// const text = (
//   <p
//     style={{
//       paddingInlineStart: 24,
//     }}
//   >
//     A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
//     as a welcome guest in many households across the world.
//   </p>
// );

const questionsData = [
  {
    label: <p className={c.questions__question}>За какое время оформляется заказ?</p>,
    children: <p className={c.questions__answer}>Заявку на уборку желательно оставлять за 1 - 2 дня. <br />Если же требуется срочный выезд, мы приложим максимум усилий, чтобы выполнить заказ в самые сжатые сроки при наличии свободной бригады.</p>,
  },
  {
    label: <p className={c.questions__question}>Как долго длится уборка?</p>,
    children: <p className={c.questions__answer}>Время уборки жилого помещения -  от 2 до 6 часов. <br />Коммерческое или промышленное помещение будет убираться в срок - в зависимости от вида работ и метража.</p>,
  },
  {
    label: <p className={c.questions__question}>Как я могу оплатить ваши услуги?</p>,
    children: <p className={c.questions__answer}>Наличными деньгами или через Сбербанк Онлайн. <br />Для юр.лиц предусмотрен безналичный расчёт.</p>,
  },
  {
    label: <p className={c.questions__question}>Должен ли хозяин квартиры предоставить инвентарь и моющие средства?</p>,
    children: <p className={c.questions__answer}>Нет. Всё необходимое наши сотрудники привезут с собой. <br />Уборка производится посредством профессионального оборудования и с использованием специализированных, сертифицированных моющих средств.</p>,
  },
  {
    label: <p className={c.questions__question}>Обязательно ли присутствие хозяев квартиры на время уборки?</p>,
    children: <p className={c.questions__answer}>Вы можете идти по делам, оставив клинера наводить чистоту в в вашем помещении. И вернуться к завершению уборки, чтобы принять работу. <br />У нас есть дополнительная <strong>услуга по доставке ключей</strong>. Клинер приедет и заберёт ключи перед уборкой. А по завершении её - привезёт обратно.</p>,
  },
  {
    label: <p className={c.questions__question}>Какими моющими средствами Ваши клинеры пользуются при уборке?</p>,
    children: <p className={c.questions__answer}>Мы работаем с сертифицированными, профессиональными средствами, гипоаллергенными и безопасными для людей и их питомцев. <br />В работе используется химия торговых марок Grass и Probrite.</p>,
  },
  {
    label: <p className={c.questions__question}>У меня ничего не украдут?</p>,
    children: <p className={c.questions__answer}>Вы можете быть спокойны! Каждый наш клинер при приёме на работу проходит жёсткий отбор и подписывает договор о материальной ответственности. <br />Наши специалисты дорожат честным именем и репутацией компании.</p>,
  },
];

export const QuestionsComponent = () => {
  return (
    <section className={c.questions} id='questions'>
      <div className={`${c.questions__container} container`}>
        <h2 className={c.questions__header}>Часто задаваемые вопросы</h2>
        <Collapse
          accordion 
          items={questionsData} 
          // bordered={false}
          style={{fontFamily: 'Tilda Sans'}}
        />
      </div>
    </section>
  )
};
