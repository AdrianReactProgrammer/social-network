import n from './FriendsElement.module.css'

const FriendsElement = (props) => {
  return (
    <div className={n.friendsElement}>
      <img src={props.src} className= {n.avatar} />
    </div>
  )
}

export default FriendsElement;