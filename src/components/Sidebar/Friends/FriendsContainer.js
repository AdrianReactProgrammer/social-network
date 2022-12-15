import { connect } from "react-redux";
import Friends from './Friends'

let mapStateToProps = (state) => {
  return {
    friendsList: state.navbar.sidebar.friends.friendsList
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer