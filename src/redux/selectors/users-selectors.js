import { createSelectorHook } from "react-redux"
import { createSelector } from "reselect"
// users: state.users.users,
// pageSize: state.users.pageSize,
// totalUsersCount: state.users.totalUsersCount,
// currentPage: state.users.currentPage,
// isFetching: state.users.isFetching,
// followingInProgress: state.users.followingInProgress,


const getUsers = (state) => {
  return state.users.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
  console.log('PRIVET')
  return users
})
 
export const getPageSize = (state) => {
  return state.users.pageSize
}
 
export const getTotalUsersCount = (state) => {
  return state.users.totalUsersCount
}
 
export const getCurrentPage = (state) => {
  return state.users.currentPage
}
 
export const getIsFetching= (state) => {
  return state.users.isFetching
}
 
export const getFollowingInProgress = (state) => {
  return state.users.followingInProgress
}
