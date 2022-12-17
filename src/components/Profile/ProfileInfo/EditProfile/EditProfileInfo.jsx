import styles from './EditProfileInfo.module.css'
import MainInfoEditForm from './MainInfoEditForm'
import ContactsInfoEditForm from './ContactsInfoEditForm'
import { connect } from 'react-redux';

const EditProfileInfo = (props) => {
  return (
    <div>
      <h2 className={styles.editProfileInfoH}>Change profile info</h2>
      <div className={styles.editProfileInfo}>
        <div>
          <MainInfoEditForm
            lookingForAJob={props.lookingForAJob}
            lookingForAJobDescription={props.lookingForAJobDescription}
            fullName={props.fullName}
            github={props.github}
            vk={props.vk}
            facebook={props.facebook}
            instagram={props.instagram}
            twitter={props.twitter}
            website={props.website}
            youtube={props.youtube}
            mainLink={props.mainLink}
            userId={props.userId}
          />
        </div>
        <div>
          <ContactsInfoEditForm
            lookingForAJob={props.lookingForAJob}
            lookingForAJobDescription={props.lookingForAJobDescription}
            fullName={props.fullName}
            github={props.github}
            vk={props.vk}
            facebook={props.facebook}
            instagram={props.instagram}
            twitter={props.twitter}
            website={props.website}
            youtube={props.youtube}
            mainLink={props.mainLink}
            userId={props.userId}
          />
        </div>
      </div>
    </div>
  )
}

const mstp = (state) => ({
  userId: state.userAuth.id,
  lookingForAJob: state.profilePage.profile.lookingForAJob,
  lookingForAJobDescription: state.profilePage.profile.lookingForAJobDescription,
  fullName: state.profilePage.profile.fullName,
  github: state.profilePage.profile.contacts.github,
  vk: state.profilePage.profile.contacts.vk,
  facebook: state.profilePage.profile.contacts.facebook,
  instagram: state.profilePage.profile.contacts.instagram,
  twitter: state.profilePage.profile.contacts.twitter,
  website: state.profilePage.profile.contacts.website,
  youtube: state.profilePage.profile.contacts.youtube,
  mainLink: state.profilePage.profile.contacts.mainLink
})

export default connect(mstp)(EditProfileInfo)