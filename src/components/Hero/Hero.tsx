import c from './Hero.module.css';
import { CallbackForm } from '../CallBackForm/CallBackForm';

export const HeroComponent = () => {
  return (
    <section className={c.hero}>
      <div className={`${c.hero__container} container`}>
        <CallbackForm />
      </div>
    </section>
  );
};
