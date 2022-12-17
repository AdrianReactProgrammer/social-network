import styles from './ProfileInfo.module.css'
import Preloader from '../../../commons/preloader/Preloader';
import user from '../../../assets/user.png'
import ProfileStatus from './ProfileStatus';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileInfo = (props) => {

  let [isFetching, toggleIsFetching] = useState(false)

  let onMainPhotoSelect = (e) => {
    toggleIsFetching(true)
    if (e.target.files.length) {
      props.uploadPhoto(e.target.files[0]).then(() => {
        toggleIsFetching(false)
      })
    }
  }

  if (props.profile === null) {
    return (
      <div className={styles.preloader}>
        <Preloader isFetching={props.isFetching} width={'200'} />
      </div>
    )
  } else {
    return (
      <div className={styles.content}>
        <div className={styles.avatarInfoContainer}>
          <div className={styles.avatar}>
            {isFetching ? <Preloader isFetching={isFetching} width={'200'} /> :
              <>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : user} />
                {props.authUserId == props.userId
                  ? <input type={"file"} className={styles.uploadPhotoButton} onChange={(e) => {
                    onMainPhotoSelect(e)
                  }} /> : null}
              </>
            }
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{props.profile.fullName}</div>
            <ProfileStatus
              status={props.status}
              setStatus={props.setStatus}
              authUserId={props.authUserId}
              userId={props.userId} />
            <div className={styles.lookingJob}>
              <span className={styles.lookingForAJob}>Looking for a job:</span><br />
              <img className={styles.lookingJobImg} src={props.profile.lookingForAJob == true ? 'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39.png'
                : 'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-340x340.png'} /><br />
              <span className={styles.jobStatusDescription}>{props.profile.lookingForAJobDescription}</span>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactsItems}>
              {props.profile.contacts.facebook != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.facebook}>Facebook</a></div> : null}
              {props.profile.contacts.website != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.website}>WebSite</a></div> : null}
              {props.profile.contacts.vk != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.vk}>VK</a></div> : null}
              {props.profile.contacts.twitter != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.twitter}>Twitter</a></div> : null}
              {props.profile.contacts.instagram != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.instagram}>Instagram</a></div> : null}
              {props.profile.contacts.youtube != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.youtube}>YouTube</a></div> : null}
              {props.profile.contacts.github != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.github}>GitHub</a></div> : null}
              {props.profile.contacts.mainLink != null ? <div><a className={styles.contact} href={'http://' + props.profile.contacts.mainLink}>MainLink</a></div> : null}
            </div>
          </div>
          <NavLink to={'/editprofile'} ><button className={styles.editProfileButton}>Редактировать информацию</button></NavLink>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;