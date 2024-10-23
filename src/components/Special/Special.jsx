import c from './Special.module.css';
import { CallbackForm } from './../CallBackForm/CallBackForm';

export const SpecialComponent = () => {
  return (
    <section className={c.special}>
      <div className={`${c.special__container} container`} style={{ backgroundImage: `url(https://addawards.ru/upload/iblock/146/kitchen_view_5.jpg)` }}>
        <CallbackForm />
      </div>
    </section>
  );
};
