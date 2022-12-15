import Communities from './Communities'
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    communities: state.communitiesPage.communities
  }
}

const CommunitiesContainer = connect(mapStateToProps)(Communities)

export default CommunitiesContainer