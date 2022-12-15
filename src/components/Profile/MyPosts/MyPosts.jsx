import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.posts
    .map(p => <Post name={p.name} age={p.age} post={p.post} likesCount={p.likesCount} key={p.id} />)

  let postText = React.createRef();

  let updatePostText = () => {
    let text = postText.current.value
    props.updatePostText(text)
  }

  let addPost = () => {
    props.addPost()
  }

  return (
    <div>
      <h3 className={n.title}>My posts</h3>
      <div>
        <div>
          <textarea className={n.postInput} ref={postText} onChange={updatePostText} value={props.newPostText} />
          <button className={n.addPostButton} onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={n.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;