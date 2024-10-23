import React, { useState, useRef } from 'react';
import { Modal, Button } from 'antd';
import c from './PrivacyModal.module.css';

export const PrivacyModal = ({ buttonName, title, text, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const footerRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsExpanded(false);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Функция для скролла вниз к кнопке согласия
  const scrollToBottom = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // При закрытии модалки текст будет сворачиваться
  const handleCancel = () => {
    setIsExpanded(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className={`${c.privacyButton} ${className && className}`} onClick={showModal}>
        {buttonName}
      </Button>
      <Modal
        closable={false}
        maskClosable={false}
        title={title || 'Политика конфиденциальности'}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            disabled={!isExpanded} // Кнопка активна только при развернутом тексте
          >
            Прочитал и согласен
          </Button>,
        ]}
      >
        {/* Кнопка для прокрутки вниз (видна только если текст развернут и длина текста больше 1000 символов) */}
        {isExpanded && text.length > 1000 && (
          <div className={c.scrollButtonWrapper}>
            <Button type="link" onClick={scrollToBottom}>
              Прокрутить вниз
            </Button>
          </div>
        )}

        <div>
          <p>
            {isExpanded ? text : text?.slice(0, 500) + '...'} {/* Обрезанный текст */}
          </p>

          {/* Кнопка "Развернуть/Свернуть" появляется только если текст больше 500 символов */}
          {text.length > 500 && (
            <Button type="link" onClick={handleToggle}>
              {isExpanded ? 'Свернуть' : 'Развернуть'}
            </Button>
          )}
        </div>

        {/* Ссылка для скролла к кнопке "Прочитал и согласен" */}
        <div ref={footerRef} />
      </Modal>
    </>
  );
};
