import n from './TestComponent.module.css'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const TestComponent = (props) => {

  let [useMessageData, setMessageData] = useState(null)
  let [useGenreData, setGenreData] = useState(null)

  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    setMessageData(data.postMessage)
    setGenreData(data.genre)
    reset()
  }

  return <div className={n.wrapper}>
    <div className={n.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Alert this...</label><br />
        <input className={n.input} {...register('postMessage', {
          required: 'Обязательное поле!',
          minLength: {
            value: 5,
            message: 'Минимальное кол-во символов - 5'
          },
        })}
        /><br />
        <span className={n.errorsField}>
          {errors?.postMessage?.message && <p>{errors?.postMessage?.message || 'Error!'}</p>}
        </span>
        <select {...register('genre', {
          required: 'Select please'
        })}>
          <option value={'movie'}>movie</option>
          <option value={'music'}>music</option>
          <option value={'worldNews'}>world news</option>
        </select>
        <p>{useMessageData}</p>
        <p>{useGenreData}</p>
        <input type='submit' className={n.submit}/>
      </form>
    </div>
  </div>
}



const mstp = (state) => ({
  test: 1
})

export default compose(
  connect(mstp)
)(TestComponent)

