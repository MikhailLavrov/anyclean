import c from './SocialButtons.module.css';

export const SocialButtons = ({wrapperClassName}) => {
  return (
    <div className={wrapperClassName}>
      <a href="https://t.me/yourtelegram" className={`${c.socialButton} ${c.socialButton__telegram}`} target="_blank" rel="noopener noreferrer">
        <img src='https://pngicon.ru/file/uploads/telegram.png' width={20} alt='social' />
        <span>Telegram</span>
      </a>
      <a href="https://wa.me/1234567890" className={`${c.socialButton} ${c.socialButton__whatsapp}`} target="_blank" rel="noopener noreferrer">
        <img src='https://cdn.usbrandcolors.com/images/logos/whatsapp-logo.svg' width={20} alt='social' />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
