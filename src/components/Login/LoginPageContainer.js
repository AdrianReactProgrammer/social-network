import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { login, logout } from './../../redux/userAuth-reducer';

let mstp = (state) => ({
    isAuth: state.userAuth.isAuth,
    isFetching: state.userAuth.isFetching,
    redirectingToProfile: state.userAuth.redirectingToProfile
})

const LoginPageContainer = connect(mstp, {login, logout})(LoginPage)

export default LoginPageContainer