import styles from './News.module.css'
import NewsElement from './LeftColumn/NewsElement'
import PostNewsForm from './LeftColumn/PostNewsForm'
import LastNews from './RightColumn/LastNews';
import { connect } from 'react-redux';
import { addNews, deleteNews } from './../../redux/news-reducer';

const News = (props) => {

  let newsElement = props.news
    .map(n => <NewsElement user={n.user} title={n.title} content={n.content} img={n.image} time={n.time} category={n.category} />)

  let lastNews = props.news
    .map(n => <LastNews lastNews={n.title} />)


  return (
    <div className={styles.page}>
      <h1>Новости</h1><br />
      <div className={styles.leftColumn}>
        <PostNewsForm addNews={props.addNews} /><br />
        {newsElement}
      </div>
      <div className={styles.rightColumn}>
        <h4>Последние новости:</h4>
        {lastNews}
      </div>
    </div>
  )
}

const mstp = (state) => ({
  news: state.news.news
})

export default connect(mstp, {addNews})(News)