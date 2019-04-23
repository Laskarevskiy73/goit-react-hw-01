import React from "react";
import propTypes from "prop-types";

const Profile = ({ user: { name, tag, location, avatar, stats } }) => (
  <div>
    <div>
      <img src={avatar} alt="user avatar" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
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

export default Profile;
