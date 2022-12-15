import styles from './Users.module.css'

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 6 < 0 ? 0 : curP - 6;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return slicedPages.map((p) => {
    return (
      <div className={styles.pageNumber}>
        <span className={`${p === props.currentPage && styles.activePage}`} onClick={(e) => {
          props.onPageChanged(p);
        }}> {p}
        </span>
      </div>
    );
  })
}



export default Paginator