import { stepsData } from '../../data/stepsData';
import c from './Steps.module.css';

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
