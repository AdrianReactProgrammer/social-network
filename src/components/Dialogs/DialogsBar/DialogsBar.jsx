import n from '../DialogsPage.module.css'
import Dialog from './Dialog'

const DialogsBar = (props) => {

  let dialogs = props.dialogs
    .map(d => <Dialog avatar={d.avatar} name={d.name} />)

  return (
    <div className={n.dialogsBar}>
      {dialogs}
    </div>
  )
}

export default DialogsBar