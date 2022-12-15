import { connect } from "react-redux"
import {
  setCurrentPage,
  toggleFollowingStatus,
  getUsers,
  follow,
  unfollow
} from "../../redux/usersPage-reducer"
import Users from "./Users"
import React, { useEffect } from "react"
import Preloader from "../../commons/preloader/Preloader"
import { compose } from "redux"
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { getPageSize, getUsersSelector, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/selectors/users-selectors'

const UsersClassContainer = (props) => {

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  let onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.getUsers(pageNumber, props.pageSize)
  }

  return (
    <>
      <Preloader isFetching={props.isFetching} />
      <Users
        pageSize={props.pageSize}
        totalUsersCount={props.totalUsersCount}
        currentPage={props.currentPage}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        onPageChanged={onPageChanged.bind()}
        isFetching={props.isFetching}
        followingInProgress={props.followingInProgress}
        toggleFollowingStatus={props.toggleFollowingStatus}
        setCurrentPage={props.setCurrentPage}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

const UsersContainer = compose(
  connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingStatus,
    getUsers,
    follow,
    unfollow
  }),
  // withAuthRedirect
)(UsersClassContainer)

export default UsersContainer
