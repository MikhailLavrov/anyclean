import c from './Special.module.css';
// import { Image } from 'antd';
import { CallbackForm } from './../CallBackForm/CallBackForm';

export const SpecialComponent = () => {
  return (
    <section className={c.special}>
      <div className={`${c.special__container} container`}>
        <CallbackForm />
      </div>
    </section>
  )
}
