import { usersAPI } from "../API/API"
import { updateObjectInArray } from './../utils/object-helpers';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const TOGGLE_FOLLOWING_STATUS = 'TOGGLE-FOLLOWING-STATUS'


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}



const usersPageReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.usersCount }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber }
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_FOLLOWING_STATUS:
      return {
        ...state, followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(uId => uId != action.userId)
      }
    default: return state

  }
}

export const followAccept = (userId) => ({ type: FOLLOW, userId })
export const unfollowAccept = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const toggleFollowingStatus = (followingInProgress, userId) => ({ type: TOGGLE_FOLLOWING_STATUS, followingInProgress, userId })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true))
  let data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
  dispatch(setIsFetching(false))
}

const followUnfollowFlow = async (userId, dispatch, actionCreator, apiMethod) => {
  dispatch(toggleFollowingStatus(true, userId))
  let data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingStatus(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(userId, dispatch, followAccept, usersAPI.follow.bind(usersAPI))
}


export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(userId, dispatch, unfollowAccept, usersAPI.unfollow.bind(usersAPI))
}


export default usersPageReducer;