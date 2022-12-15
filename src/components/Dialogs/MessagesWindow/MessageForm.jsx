import n from '../DialogsPage.module.css'
import { Formik, Form, Field } from 'formik';

const MessageForm = (props) => {
  return (
    <div className={n.messageForm}>
      <Formik initialValues={{ messageInput: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            props.sendMessage(values.messageInput)
            setSubmitting(false)
            values.messageInput = ''
          }, 400)
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field name={'messageInput'} as={'textarea'} className={n.messageInput} placeholder={'Enter your message...'} />
            <button name={'sendMessage'} type={'submit'} disabled={isSubmitting} >send message</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MessageForm