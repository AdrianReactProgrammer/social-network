import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { compose } from 'redux';

const HeaderContainer = (props) => {
    debugger
    return (
        <Header isAuth={props.data.isAuth} photo={props.photo}  authUserId={props.authUserId} key={10000} />
    )
};


let mstp = (state) => ({
    data: state.userAuth,
    photo: state.profilePage.profile.photos.small,
    authUserId: state.userAuth.id
})

export default connect(mstp)(HeaderContainer)