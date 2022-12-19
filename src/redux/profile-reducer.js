import { profileAPI } from "../API/API"
import user from "../assets/user.png"

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const GET_STATUS = 'GET-STATUS'
const SET_STATUS = 'SET-STATUS'
const UPLOAD_PHOTO_SUCCESS = "UPLOAD-PHOTO-SUCCESS"
const TOGGLE_UPLOADED_STATUS = "TOGGLE-UPLOADED-STATUS"
const SET_USER_PROFILE_AFTER_UPDATE_INFO = "SET-USER-PROFILE-AFTER-UPDATE-INFO"

let initialState = {
  aboutMe: null,
  posts: [],
  newPostText: '',
  profile: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: {
      small: null,
      large: null
    }
  },
  uploaded: null,
  isFetching: true,
  status: null,
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
    case SET_USER_PROFILE_AFTER_UPDATE_INFO:
      return state = {
        ...state, profile: {
          ...state.profile,
          lookingForAJob: action.profile.lookingForAJob,
          lookingForAJobDescription: action.profile.lookingForAJobDescription,
          fullName: action.profile.fullName,
          aboutMe: action.profile.aboutMe,
          contacts: action.profile.contacts
        }
      }
    case SET_IS_FETCHING:
      return state = { ...state, isFetching: false }
    case GET_STATUS:
      return state = { ...state, status: action.status }
    case SET_STATUS:
      return state = { ...state, status: action.status }
    case UPLOAD_PHOTO_SUCCESS:
      return state = { ...state, profile: { ...state.profile, photos: action.photos } }
    case TOGGLE_UPLOADED_STATUS:
      return state = { ...state, uploaded: action.status }
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
export const uploadPhotoSuccess = (photos) =>
  ({ type: UPLOAD_PHOTO_SUCCESS, photos })
export const toggleUploadedStatus = (status) =>
  ({ type: TOGGLE_UPLOADED_STATUS, status })
export const setUserProfileAfterUpdateInfo = (profile) =>
  ({ type: SET_USER_PROFILE_AFTER_UPDATE_INFO, profile })


export const changeProfileInfoThunk = (requestData) => {
  debugger
  return (
    async (dispatch) => {
      debugger
      let data = await profileAPI.changeProfileInfo(requestData)
      debugger
      if (data.resultCode === 0) {
        dispatch(setUserProfileAfterUpdateInfo(requestData))
        dispatch(toggleUploadedStatus(true))
      } else {
        dispatch(toggleUploadedStatus(false))
      }
    })
}

export const uploadPhoto = (image) => {
  return (
    async (dispatch) => {
      let data = await profileAPI.uploadPhoto(image)
      if (data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(data.data.photos))
      }
    })
}

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
  if (data.resultCode === 0) {
    dispatch(setStatusAC(status))
  }
}



export default profileReducer;