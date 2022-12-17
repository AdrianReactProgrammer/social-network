import styles from "./EditProfileInfo.module.css"
import { useForm } from "react-hook-form";

const MainInfoEditForm = (props) => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    let mainInfo = {
      fullName: data.fullName.length > 0 ? data.fullName : props.fullName,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription.length > 0 ? data.lookingForAJobDescription : null,
    }
    console.log(mainInfo)
  }

  return (
    <div className={styles.MainInfoEditForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fullNameContainer}>
          <label>Fullname</label>
          <input
            defaultValue={props.fullName}
            {...register("fullName")}
            className={styles.fullNameInput} />
        </div>
        <div className={styles.LookingForAJobContainer}>
          <label>Looking for a job?</label>
          <select {...register("lookingForAJob")} className={styles.LookingForAJobSelector}>
            <option value={props.lookingForAJob}>
              {props.lookingForAJob ? 'Yes' : 'No!'}
            </option>
            <option value={props.lookingForAJob ? false : true}>
              {props.lookingForAJob ? 'No!' : 'Yes'}
            </option>
          </select>
          <label className={styles.lookingForAJobDescriptionLabel} >description:</label>
          <input
            defaultValue={props.lookingForAJobDescription}
            {...register("lookingForAJobDescription")}
            className={styles.lookingForAJobDescriptionInput} />
        </div>
        <input value="Save" type="submit" className={styles.saveInfoButton} />
      </form>
    </div>
  );


  // const { register, handleSubmit, formState: { errors }, resetField } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data)
  //   props.addNews(data)
  //   resetField('newsTitle')
  //   resetField('newsMessage')
  // }

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)} className={styles.postNewsForm}>
  //     <label>заголовок:</label><br />
  //     <input
  //       className={styles.titleInput}
  //       {...register("newsTitle", { maxLength: 300, required: true })}
  //       placeholder={errors?.newsTitle && 'вам следует что-нибудь написать...'} /><br />
  //     <label>Что у вас нового?</label>
  //     <textarea
  //       {...register("newsMessage", { maxLength: 300, required: true })}
  //       placeholder={errors?.newsMessage && 'вам следует что-нибудь написать...'} /><br />
  //     <select {...register("category", { required: true })} className={styles.categorySelector}>
  //       <option value="My news">My news</option>
  //       <option value=" Movie"> Movie</option>
  //       <option value=" Music"> Music</option>
  //     </select>
  //     <div className={styles.shareToFriends}>
  //       <input type="checkbox" placeholder="shareToFriends" {...register("shareToFriends", {})} />
  //       <span>Рассказать друзьям</span>
  //     </div>
  //     <input type="submit" value={'Post this!'} className={styles.submitButton} />
  //   </form>
  // );
}

export default MainInfoEditForm