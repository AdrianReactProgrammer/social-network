import FriendsContainer from './Friends/FriendsContainer';
import n from './Sidebar.module.css'

const Sidebar = (props) => {


  return (
    <div className={n.sidebar}>
      <h3>Friends:</h3>
      <FriendsContainer />
    </div>
  )
}

export default Sidebar;