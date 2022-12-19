import styles from "./EditProfileInfo.module.css"
import { useForm } from 'react-hook-form'

const ContactsInfoEditForm = (props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const requestData = {
      // aboutMe: "aboutMe((", 
      userId: props.userId,
      lookingForAJob: props.lookingForAJob,
      lookingForAJobDescription: props.lookingForAJobDescription,
      fullName: props.fullName,
      contacts: {
        github: data.github,
        vk: data.vk,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        website: data.website,
        youtube: data.youtube,
        mainLink: data.mainLink
      }
    }
    console.log(requestData)
    props.changeInfo(requestData)
  }

  return (
    <div className={styles.contactsInfoEditForm}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >GitHub:</label>
          <input
            defaultValue={props.github}
            {...register("github")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >VK:</label>
          <input
            defaultValue={props.vk}
            {...register("vk")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >Facebook:</label>
          <input
            defaultValue={props.facebook}
            {...register("facebook")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >Instagram</label>
          <input
            defaultValue={props.instagram}
            {...register("instagram")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >Twitter:</label>
          <input
            defaultValue={props.twitter}
            {...register("twitter")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >WebSite:</label>
          <input
            defaultValue={props.website}
            {...register("website")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >YouTube:</label>
          <input
            defaultValue={props.youtube}
            {...register("youtube")}
            className={styles.contactInput} />
        </div>

        <div className={styles.contactInputContainer}>
          <label className={styles.contactsLabels} >mainLink:</label>
          <input
            defaultValue={props.mainLink}
            {...register("mainLink")}
            className={styles.contactInput} />
        </div>

        <input value="Save" type="submit" className={styles.saveInfoButton} />
      </form>
    </div>
  )
}

export default ContactsInfoEditForm