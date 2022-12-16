import n from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={n.content}>
            <ProfileInfo uploadPhoto={props.uploadPhoto} profile={props.profile} isFetching={props.isFetching} status={props.status} setStatus={props.setStatus} userId={props.params.userId} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile