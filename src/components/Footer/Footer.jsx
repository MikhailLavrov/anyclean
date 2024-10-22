import c from './Footer.module.css';

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={c.footer}>
      <div className={`${c.footer__container} container`}>
        <div className={c.copyright}>Copyright © {currentYear} Any Clean</div>
        <div className={c.developer}></div>
      </div>
    </footer>
  )
}
