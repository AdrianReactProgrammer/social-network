import React from 'react'
import { connect } from 'react-redux'
import { getProfile, getStatus, setStatus, uploadPhoto } from './../../redux/profile-reducer';
import Profile from './Profile'
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import withRouter from './../../commons/withRouter/withRouter';
import { compose } from 'redux';
import { profileAPI } from '../../API/API';
import { useEffect } from 'react';
import { getIsFetching } from './../../redux/selectors/users-selectors';
import { getIsAuth } from './../../redux/selectors/userAuth-selectors';
import { getStatusS, getProfileS } from './../../redux/selectors/profile-selector';

const ProfileClassContainer = (props) => {

    useEffect(() => {
        let userId = props.params.userId === 'me' ? 26362 : props.params.userId
        props.getProfile(userId)
        props.getStatus(userId)
    }, [])

    useEffect(() => {
        let userId = props.params.userId === 'me' ? 26362 : props.params.userId
        props.getStatus(userId)
    })


    return <>
        <Profile {...props} />
    </>
}

let mstp = (state) => ({
    profile: getProfileS(state),
    isFetching: getIsFetching(state),
    isAuth: getIsAuth(state),
    status: getStatusS(state)
})

let ProfileContainer = compose(
    connect(mstp, { getProfile, getStatus, setStatus, uploadPhoto }),
    withRouter,
    // withAuthRedirect
)(ProfileClassContainer)

// let WithAuthRedirectContainer = withAuthRedirect(ProfileClassContainer)

// let ProfileContainerWithUrlData = withRouter(WithAuthRedirectContainer)
// // let ProfileContainerWithUrlData = (props) => {
// //     return (<WithAuthRedirectContainer {...props} params={useParams()} />
// //     )
// // }

// const ProfileContainerr = connect(mstp, { getProfile })(ProfileContainerWithUrlData)

export default ProfileContainer 