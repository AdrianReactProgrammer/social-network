import n from '../DialogsPage.module.css'

const Dialog = (props) => {
  return (
    <div className={n.dialog}>
      <img className={n.avatar} src={props.avatar} />
      <span className={n.name}>{props.name}</span>
    </div>
  )
}

export default Dialog