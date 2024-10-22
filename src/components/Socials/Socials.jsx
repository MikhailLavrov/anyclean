import c from './Socials.module.css';
import { Link } from 'react-router-dom';

export const Socials = ({outerClassName}) => {
  return (
    <>
      <Link className={`${c.socials__link} ${c.socials__linkTelegram} ${outerClassName && outerClassName}`}>
        <img 
          src='https://www.onlinepalette.com/wp-content/uploads/2021/07/Telegram-Main-Logo.png'
          width={20} 
          alt='social'
        />
        <span>Telegram</span>
      </Link>
      <Link className={`${c.socials__link} ${c.socials__linkWhatsapp} ${outerClassName && outerClassName}`}>
        <img 
          src='https://cdn.usbrandcolors.com/images/logos/whatsapp-logo.svg'
          width={20}
          alt='social'
        />
        <span>WhatsApp</span>
      </Link>
    </>
  );
};
