import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import n from './Navbar.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Navbar = (props) => {

  return (
    <nav className={n.nav}>
      <div className={`${n.item} ${n.active}`}>
        <NavLink to={'/profile/' + props.userId} className={navData => navData.isActive ? n.active : n.item}>Profile</NavLink>
      </div>
      <div className={`${n.item} ${n.active}`}>
        <NavLink to='/news' className={navData => navData.isActive ? n.active : n.item}>News</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? n.active : n.item}>Messages</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/users' className={navData => navData.isActive ? n.active : n.item}>Users</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/music' className={navData => navData.isActive ? n.active : n.item}>Music</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/settings' className={navData => navData.isActive ? n.active : n.item}>Settings</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/test' className={navData => navData.isActive ? n.active : n.item}>TEST</NavLink>
      </div>
      <Sidebar />
    </nav>
  )
};

let mstp = (state) => ({
  userId: state.userAuth.id
})

export default compose(
  connect(mstp)
)(Navbar);