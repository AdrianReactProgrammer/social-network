import n from './Message.module.css'

const Message = (props) => {

  return (
    <div>
      <div className={n.message}>
        <img src={props.src} className={n.avatar} />
        <span className={n.messageContent}>{props.message}</span>
      </div>
    </div>
  )
}

export default Message;