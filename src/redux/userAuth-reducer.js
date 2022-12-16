import { authAPI } from "../API/API"
import { setUserIdInProfileReducer } from "./profile-reducer"

const SET_USER_DATA = 'SET-USER-DATA'
const SET_IS_AUTH = 'SET-IS-AUTH'
const SET_IS_FETCHING = 'SET-IS-FETCHING'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
}

const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: return state
    }

}

export let setUserData = (data) => ({ type: SET_USER_DATA, data })
export let setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth })
export let setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const userAuth = () => async (dispatch) => {
    dispatch(setIsFetching(true))
    return authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setIsAuth(true))
            dispatch(setUserData(data.data))
        }
        dispatch(setIsFetching(false))
    })
}

const loginLogoutFlow = async (dispatch, apiMethod, actionCreator) => {
    dispatch(setIsFetching(true))
    let data = await apiMethod
    if (data.resultCode === 0) {
        dispatch(actionCreator)
    }
    dispatch(setIsFetching(false))
}

export const login = (values) => async (dispatch) => {
    loginLogoutFlow(dispatch, authAPI.login(values), setIsAuth(true))
}


export const logout = () => async (dispatch) => {
    loginLogoutFlow(dispatch, authAPI.logout(), setIsAuth(false))
}



export default userAuthReducer;