import { GithubOutlined } from '@ant-design/icons';
import c from './Footer.module.css';
import { PrivacyModal } from '../PrivacyModal/PrivacyModal';
import { confidenceAgreement } from '../../data/privacyData';

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={c.footer}>
      <div className={`${c.footer__container} container`}>
        <div className={c.copyright}>Copyright © {currentYear} AnyClean</div>
        <div>
          <PrivacyModal
            buttonName={'Политика конфиденциальности'}
            title={'Политика конфиденциальности'}
            text={confidenceAgreement}
          />
        </div>
        <div className={c.devLink}>
          <a href="https://github.com/MikhailLavrov" target="_blank" rel="noopener noreferrer">
            Frontend - MikhailLavrov
          </a>
          <GithubOutlined />
        </div>
      </div>
    </footer>
  )
}
