import { LocalGithubUser } from 'types';

import styles from './UserAvatar.module.scss';

type UserAvatarProps = Pick<LocalGithubUser, 'avatar' | 'login'>;

export const UserAvatar = ({ avatar, login }: UserAvatarProps) => (
  <img src={avatar} alt={login} className={styles.avatar} />
);
