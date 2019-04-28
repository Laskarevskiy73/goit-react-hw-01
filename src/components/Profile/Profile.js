import React from 'react';
import propTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ user: { name, tag, location, avatar, stats } }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img className={style.avatar} src={avatar} alt="user avatar" />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  user: {},
};

Profile.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }),
  }),
};

export default Profile;
