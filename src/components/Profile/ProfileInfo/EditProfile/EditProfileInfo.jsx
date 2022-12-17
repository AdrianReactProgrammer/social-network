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
            lookingForAJobDescription={'ahahaha'}
            fullName={props.fullName} />
        </div>
        <div>
          <ContactsInfoEditForm />
        </div>
      </div>
    </div>
  )
}

const mstp = (state) => ({
  lookingForAJob: state.profilePage.profile.lookingForAJob,
  fullName: state.profilePage.profile.fullName
})

export default connect(mstp)(EditProfileInfo)