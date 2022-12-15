import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderClassContainer = (props) => {
    return (
        <Header isAuth={props.data.isAuth} />
    )
};


let mstp = (state) => ({
    data: state.userAuth
})

let HeaderContainer = connect(mstp)(HeaderClassContainer)

export default HeaderContainer;