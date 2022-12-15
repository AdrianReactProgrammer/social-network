import styles from '../News.module.css'

const NewsElement = (props) => {
  return (
    <div className={styles.newsElement}>
      <span className={styles.user}><span>Написал: </span> {props.user}</span><br/>
      <span className={styles.time}>{props.time}</span><br/>
      <img src={props.img} /><br/>
      <span>{props.category}</span>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default NewsElement