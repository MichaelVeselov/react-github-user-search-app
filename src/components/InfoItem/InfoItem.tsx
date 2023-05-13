import React from 'react';
import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | undefined;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || 'Not available...';

  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? '' : `https://${text}`;
  }

  const infoStyles = text
    ? `${styles.infoItem}`
    : `${styles.infoItem} ${styles.empty}`;

  return (
    <div className={infoStyles}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target='_blank'
            rel='noreferrer'
            className={styles.link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
