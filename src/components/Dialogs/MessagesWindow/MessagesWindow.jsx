import n from '../DialogsPage.module.css'
import Message from './Message'
import MessageForm from './MessageForm'

const MessagesWindow = (props) => {

  let messages = props.messages
    .map(m => <Message avatar={m.avatar} messageContent={m.messageContent} />)

  return (
    <div className={n.messagesWindow}>
      {messages}
      <MessageForm sendMessage={props.sendMessage} />
    </div>
  )
}

export default MessagesWindow