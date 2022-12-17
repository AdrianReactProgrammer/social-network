import styles from './EditProfileInfo.module.css'
import MainInfoEditForm from './MainInfoEditForm';

const EditProfileInfo = (props) => {
  return (
    <div className={styles.editProfileInfo}>
      <h2>Change profile info</h2>
      <MainInfoEditForm />
      {/* lookingForAJob */}
    </div>
  )
}

export default EditProfileInfo