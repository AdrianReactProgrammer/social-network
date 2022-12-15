import user from '../../assets/user.png'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';

const User = (props) => {

  return props.users.map((u) => (
    <div className={styles.user} key={u.id}>
      <div className={styles.photoAndButtonContainer}>
        <NavLink to={"/profile/" + u.id}>
          <img
            className={styles.photo}
            src={u.photos.small != null ? u.photos.small : user}
          />
        </NavLink>
        {u.followed
          ? (<button disabled={props.followingInProgress.some((id) => id === u.id)}
            className={`${styles.button} ${styles.followingButton} ${props.followingInProgress.some((id) => id === u.id) ? styles.followingInProgress : null}`}
            onClick={() => {
              props.unfollow(u.id)
            }}>В друзьях</button>)
          : (<button disabled={props.followingInProgress.some((id) => id === u.id)}
            className={`${styles.button} ${styles.followingButton} ${props.followingInProgress.some((id) => id === u.id) ? styles.followingInProgress : null}`}
            onClick={() => {
              props.follow(u.id)
            }}>Добавить</button>)}
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.fullNameAndDescriptionContainer}>
          <span className={styles.fullName}>{u.name}</span>
          <li className={styles.online}>online</li>
          <br />
          <span className={styles.description}>{u.description}</span>
        </div>
        <div className={styles.locationContainer}></div>
      </div>
    </div>
  ))

}



export default User