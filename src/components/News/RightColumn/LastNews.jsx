import styles from '../News.module.css'

const LastNews = (props) => {
  return (
    <div className={styles.lastNews}>
      <p className={styles.lastNewsItem}>{props.lastNews}</p>
    </div>
  )
}

export default LastNews