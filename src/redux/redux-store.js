
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import communitiesPageReducer from './communitiesPage-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import profileReducer from './profile-reducer';
import userAuthReducer from "./userAuth-reducer";
import usersPageReducer from "./usersPage-reducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer';
import newsReducer from "./news-reducer";



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  communitiesPage: communitiesPageReducer,
  users: usersPageReducer,
  userAuth: userAuthReducer,
  news: newsReducer, 
  app: appReducer
})


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store



export default store;