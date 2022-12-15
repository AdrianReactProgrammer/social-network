import styles from '../News.module.css'
import { useForm } from 'react-hook-form';


const PostNewsForm = (props) => {

  const { register, handleSubmit, formState: { errors }, resetField } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    props.addNews(data)
    resetField('newsTitle')
    resetField('newsMessage')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.postNewsForm}>
      <label>заголовок:</label><br />
      <input
        className={styles.titleInput}
        {...register("newsTitle", { maxLength: 300, required: true })}
        placeholder={errors?.newsTitle && 'вам следует что-нибудь написать...'} /><br />
      <label>Что у вас нового?</label>
      <textarea
        {...register("newsMessage", { maxLength: 300, required: true })}
        placeholder={errors?.newsMessage && 'вам следует что-нибудь написать...'} /><br />
      <select {...register("category", { required: true })} className={styles.categorySelector}>
        <option value="My news">My news</option>
        <option value=" Movie"> Movie</option>
        <option value=" Music"> Music</option>
      </select>
      <div className={styles.shareToFriends}>
        <input type="checkbox" placeholder="shareToFriends" {...register("shareToFriends", {})} />
        <span>Рассказать друзьям</span>
      </div>
      <input type="submit" value={'Post this!'} className={styles.submitButton} />
    </form>
  );
}

export default PostNewsForm