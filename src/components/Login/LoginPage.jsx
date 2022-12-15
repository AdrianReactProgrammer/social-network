import n from './Login.module.css'
import Login from './Login';
import Logout from './Logout';
import Preloader from '../../commons/preloader/Preloader';

const LoginPage = (props) => {
    return (
        <div className={n.loginPage}>
            <h1>Login</h1>
            <Preloader isFetching={props.isFetching} />
            {props.isAuth ? <Logout logout={props.logout} /> : <Login login={props.login} redirectingToProfile={props.redirectingToProfile} />}
        </div>
    )
}

export default LoginPage

