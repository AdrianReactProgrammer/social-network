import n from '../DialogsPage.module.css'

const Message = (props) => {
  return (
    <div className={n.message}>
      <img className={n.avatar} src={props.avatar} />
      <span className={n.messageContent}>{props.messageContent}</span>
    </div>
  )
}

export default Message