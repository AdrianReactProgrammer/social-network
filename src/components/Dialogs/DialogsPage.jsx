import DialogsBar from './DialogsBar/DialogsBar'
import n from './DialogsPage.module.css'
import MessagesWindow from './MessagesWindow/MessagesWindow'

const DialogsPage = (props) => {
  return (
    <div className={n.dialogsPage}>
      <DialogsBar dialogs={props.dialogs} />
      <MessagesWindow messages={props.messages} sendMessage={props.sendMessage} />
    </div>
  )
}

export default DialogsPage