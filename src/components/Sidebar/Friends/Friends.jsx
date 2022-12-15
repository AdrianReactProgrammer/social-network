import n from './Friends.module.css'
import FriendsElement from './FriendsElement/FriendsElement';

const Friends = (props) => {
  let friends = props.friendsList
    .map(f => <FriendsElement src={f.src} key={f.id} />)

  return (
    <div className={n.friends}>
      {friends}
    </div>
  )
}

export default Friends;