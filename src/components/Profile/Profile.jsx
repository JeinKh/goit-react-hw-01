import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.userCard}>
      <div className={s.contentWrapper}>
        <div className={s.imgWrapper}>
          <img src={image} alt="User avatar" />
        </div>
        <div className={s.content}>
          <p className={s.name}>{name}</p>
          <p className={s.textContent}>@{tag}</p>
          <p className={s.textContent}>{location}</p>
        </div>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.subtitle}>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.subtitle}>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.subtitle}>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
