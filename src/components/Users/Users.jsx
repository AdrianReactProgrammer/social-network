import Paginator from "./Paginator";
import styles from "./Users.module.css";
import User from './User'

const Users = (props) => {

  const prev = () => {
    props.onPageChanged(props.currentPage - 1)
  }

  const next = () => {
    props.onPageChanged(props.currentPage + 1)
  }

  return (
    <div className={styles.content}>
      <h4>Пользователи</h4>
      <div className={styles.paginationContainer}>
        <span className={styles.prev} onClick={prev}>PREV</span>
        <span className={styles.paginatorSpanContainer}>
          <Paginator
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} />
        </span>
        <span className={styles.next} onClick={next}>NEXT</span>
      </div>
      <div>
        <User users={props.users} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} />
      </div>
    </div>
  );
};

export default Users;
