import n from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../../commons/preloader/Preloader';
import user from '../../assets/user.png'

const Header = (props) => {
  return (
    <header className={n.header}>
      <a href='#'><img src='./logoEnjoy.png' /></a>
        <>
          {props.isAuth
            ? <NavLink to='/profile/me'><div className={n.profile}><img className={n.profileImg} src={user}/></div></NavLink>
            : <div className={n.loginButton}><NavLink to='/login'><span onClick={props.login}>LOGIN</span></NavLink></div>
          }
        </>
    </header>
  )
};

export default Header;