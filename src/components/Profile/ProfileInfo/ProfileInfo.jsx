import n from './ProfileInfo.module.css'
import Preloader from '../../../commons/preloader/Preloader';
import user from '../../../assets/user.png'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (props.profile === null) {
    return (
      <div className={n.preloader}>
        <Preloader isFetching={props.isFetching} userId={1} />
      </div>
    )
  } else {
    return (
      <div className={n.content}>
        <div className={n.avatarInfoContainer}>
          <div className={n.avatar}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : user} />
            <input type={"file"} />
          </div>
          <div className={n.info}>
            <div className={n.name}>{props.profile.fullName}</div>
            <ProfileStatus status={props.status} setStatus={props.setStatus} />
            <div className={n.lookingJob}>
              <span className={n.lookingForAJob}>Looking for a job:</span><br/>
              <img className={n.lookingJobImg} src={props.profile.lookingForAJob == true ? 'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39.png'
                : 'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-340x340.png'} /><br/>
              <span className={n.jobStatusDescription}>{props.profile.lookingForAJobDescription}</span>
            </div>
          </div>
          <div className={n.contacts}>
            <div className={n.contactsItems}>
              {props.profile.contacts.facebook != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.facebook}>Facebook</a></div> : null}
              {props.profile.contacts.website != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.website}>WebSite</a></div> : null}
              {props.profile.contacts.vk != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.vk}>VK</a></div> : null}
              {props.profile.contacts.twitter != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.twitter}>Twitter</a></div> : null}
              {props.profile.contacts.instagram != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.instagram}>Instagram</a></div> : null}
              {props.profile.contacts.youtube != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.youtube}>YouTube</a></div> : null}
              {props.profile.contacts.github != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.github}>GitHub</a></div> : null}
              {props.profile.contacts.mainLink != null ? <div><a className={n.contact} href={'http://' + props.profile.contacts.mainLink}>MainLink</a></div> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;