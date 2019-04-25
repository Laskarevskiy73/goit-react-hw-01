import React from "react";
import propTypes from "prop-types";
import style from "./Profile.module.css";

export const user = {
  name: "Jacques Gluke",
  tag: "@jgluke",
  location: "Ocho Rios, Jamaica",
  avatar:
    "http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

export const Profile = ({ user: { name, tag, location, avatar, stats } }) => (
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

Profile.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number,
      views: propTypes.number,
      likes: propTypes.number
    })
  })
};
