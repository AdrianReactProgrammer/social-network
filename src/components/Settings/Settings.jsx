import n from './Settings.module.css'
import { NavLink } from 'react-router-dom';

const Settings = (props) => {
  return (
    <div className={n.content}>
      <div>Settings</div>
      <div>Settings</div>
      <div>Settings</div>
      <div>Settings</div>
      <div>Settings</div>
      <div>Settings</div>
      <div>Settings</div>
      <div>Settings</div>
      {props.isAuth && <NavLink to={'/login'}><button className={n.logoutButton}>logout</button></NavLink>}
      {!props.isAuth && <NavLink to={'/login'}><button className={n.loginButton}>login</button></NavLink>}
    </div>
  );
};

export default Settings;