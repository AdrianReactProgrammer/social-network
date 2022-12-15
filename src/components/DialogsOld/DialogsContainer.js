import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { updateMessageText, addMessage } from './../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mstp = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let DialogsContainer = compose(
  connect(mstp, {addMessage, updateMessageText}),
  withAuthRedirect
)(Dialogs)

// let withAuthRedirectContainer = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mstp, {addMessage, updateMessageText})(withAuthRedirectContainer)

export default DialogsContainer;