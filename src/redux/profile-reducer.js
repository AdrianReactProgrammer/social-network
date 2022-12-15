import { profileAPI } from "../API/API"

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const GET_STATUS = 'GET-STATUS'
const SET_STATUS = 'SET-STATUS'

let initialState = {
  posts: [
    { id: 1, name: 'Dima', age: 30, post: 'Crazy!', likesCount: 15 },
    { id: 2, name: 'Adrian', age: 17, post: 'Yeh, you are right!', likesCount: 6 },
    { id: 3, name: 'Evgeny', age: 5, post: 'Oh, no... My mother is dead and i lose my brains(((', likesCount: 0 },
    { id: 4, name: 'Liza', age: 25, post: 'Suck my big D, loooozers xD', likesCount: -11 },
    { id: 5, name: 'VIKING', age: 999, post: 'I\'M VIKING WUAAAAAH', likesCount: 99999 },
    { id: 5, name: 'Slavik', age: 0, post: 'I hate you, Adrian', likesCount: -10000 }
  ],
  newPostText: '',
  profile: null,
  isFetching: true,
  status: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {
          name: 'Dimka',
          age: 78,
          post: state.newPostText,
          likesCount: 0,
          id: 6,
        }]
      }
    case SET_USER_PROFILE:
      return state = { ...state, profile: action.profile }
    case SET_IS_FETCHING:
      return state = { ...state, isFetching: false }
    case GET_STATUS:
      return state = { ...state, status: action.status }
    case SET_STATUS:
      return state = { ...state, status: action.status }
    default: return state
  }
}

export const updatePostText = (text) =>
  ({ type: UPDATE_POST_TEXT, newText: text })
export const addPost = () =>
  ({ type: ADD_POST })
export const setUserProfile = (profile) =>
  ({ type: SET_USER_PROFILE, profile })
export const setIsFetching = (isFetching) =>
  ({ type: SET_IS_FETCHING, isFetching })
export const getStatusAC = (status) =>
  ({ type: GET_STATUS, status })
export const setStatusAC = (status) =>
  ({ type: SET_STATUS, status })

export const getProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
  dispatch(setIsFetching(false))
}


export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(getStatusAC(data))
}

export const setStatus = (status) => async (dispatch) => {
  let data = await profileAPI.setStatus(status)
  if (data.resultCode != 1) {
    dispatch(setStatusAC(status))
  }
}



export default profileReducer;