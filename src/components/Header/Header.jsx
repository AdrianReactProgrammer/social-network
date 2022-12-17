import n from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../../commons/preloader/Preloader';
import logo from './logoEnjoy.png'

const Header = (props) => {
  return (
    <header className={n.header}>
      <a href='#'><img src={logo} /></a>
        <>
          {props.isAuth
            ? <NavLink to={'/profile/' + props.authUserId}><div className={n.profile}><img className={n.profileImg} src={props.photo}/></div></NavLink>
            : <div className={n.loginButton}><NavLink to='/login'><span onClick={props.login}>LOGIN</span></NavLink></div>
          }
        </>
    </header>
  )
};

export default Header;