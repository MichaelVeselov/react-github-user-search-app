import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

import { UserAvatar } from '../UserAvatar';
import { UserTitle } from '../UserTitle';
import { UserBio } from '../UserBio';
import { UserStat } from '../UserStat';
import { UserInfo } from '../UserInfo';

type UserCardProps = LocalGithubUser;

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserAvatar avatar={props.avatar} login={props.login} />
    <UserTitle created={props.created} login={props.login} name={props.name} />
    <UserBio bio={props.bio} />
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
