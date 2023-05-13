import { LocalGithubUser } from 'types';

import styles from './UserBio.module.scss';

type UserBioProps = Pick<LocalGithubUser, 'bio'>;

export const UserBio = ({ bio }: UserBioProps) => {
  const bioStyles = bio ? `${styles.bio}` : `${styles.bio} ${styles.empty}`;
  return <p className={bioStyles}>{bio || 'This profile has no bio...'}</p>;
};
