import { questionsData } from '../../data/questionsData';
import c from './Questions.module.css';
import { Collapse } from 'antd';

export const QuestionsComponent = () => {
  const items = questionsData.map((item) => ({
    label: <p className={c.questions__question}>{item.question}</p>,
    children: <p className={c.questions__answer}>{item.answer}</p>,
  }));

  return (
    <section className={c.questions} id="questions">
      <div className={`${c.questions__container} container`}>
        <h2 className={c.questions__header}>Часто задаваемые вопросы</h2>
        <Collapse
          accordion
          items={items}
          style={{ fontFamily: 'Tilda Sans' }}
        />
      </div>
    </section>
  );
};
