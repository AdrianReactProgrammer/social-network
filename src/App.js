import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Music from './components/Music/Music'
import SettingsContainer from './components/Settings/SettingsContainer'
import CommunitiesContainer from './components/Communities/CommunitiesContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { getInitialized } from './redux/app-reducer'
import { compose } from 'redux'
import { useEffect } from 'react'
import TestComponent from './components/TEST-COMPONENT/TestComponent'
import News from './components/News/News'
import store from './redux/redux-store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const LoginPageContainer = lazy(() => import('./components/Login/LoginPageContainer'));
const EditProfileInfo = lazy(() => import('./components/Profile/ProfileInfo/EditProfile/EditProfileInfo'));



const App = (props) => {

  useEffect(() => {
    props.getInitialized()
  }, [])

  // if (props.initialized == false) {
  //   return <div role={'main'}><div className='pleaseWait'>PLEASE, WAIT...</div><Preloader isFetching={true} /></div>
  // } else {
  return (
    <div className='app-wrapper' role={'main'} >
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/editprofile' element={<EditProfileInfo />} />
            <Route path='/login' element={<LoginPageContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/publics/*' element={<CommunitiesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<SettingsContainer />} />
            <Route path='/test' element={<TestComponent />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
// }

const mstp = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  connect(mstp, { getInitialized }),
  // withAuthRedirect
)(App)

let SocialNetworkApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default SocialNetworkApp