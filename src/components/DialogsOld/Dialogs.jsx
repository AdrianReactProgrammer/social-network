import React from 'react';
import n from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {

  let newMessageElement = React.createRef()

  const updateMessageText = () => {
    let text = newMessageElement.current.value
    props.updateMessageText(text)
  }

  const addMessage = () => {
    props.addMessage()
  }

  let messagesElements = props.messages.map(m => <Message message={m.message} src={m.src} key={m.id} />)
  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} key={d.id} />)

  return (
    <div className={n.content}>
      <div className={n.dialogs}>
        {dialogsElements}
      </div>
      <div className={n.messages}>
        {messagesElements}
        <div className={n.messageInput}>
          <textarea className={n.input} onChange={updateMessageText} ref={newMessageElement} value={props.newMessageText} placeholder='Enter your message...' />
          <button className={n.button} onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;