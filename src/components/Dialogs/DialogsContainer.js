import { connect } from 'react-redux';
import DialogsPage from './DialogsPage';
import { sendMessage } from './../../redux/dialogs-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

const mstp = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages
})

let DialogsPageContainer = compose(
  connect(mstp, {sendMessage}),
  // withAuthRedirect
)(DialogsPage)

export default DialogsPageContainer