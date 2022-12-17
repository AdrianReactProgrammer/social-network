import n from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={n.content}>
            <ProfileInfo
                authUserId={props.authUserId}
                userId={props.params.userId}
                uploadPhoto={props.uploadPhoto}
                profile={props.profile} isFetching={props.isFetching}
                status={props.status}
                setStatus={props.setStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile