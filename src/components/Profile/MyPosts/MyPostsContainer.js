import { connect } from 'react-redux';
import { addPost, updatePostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { getNewPostText, getPosts } from './../../../redux/selectors/profile-selector';

let mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    newPostText: getNewPostText(state)
  }
}

const MyPostsContainer = connect(mapStateToProps, {updatePostText, addPost})(MyPosts)

export default MyPostsContainer;