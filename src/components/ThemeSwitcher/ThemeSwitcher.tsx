import { useState, useEffect } from 'react';

import styles from './ThemeSwitcher.module.scss';

import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(true);

  const themeText = isDark ? 'Dark' : 'Light';
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div
      className={styles.switcher}
      onClick={() => {
        setDark(!isDark);
      }}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
