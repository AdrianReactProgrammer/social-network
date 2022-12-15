import { NavLink } from 'react-router-dom'
import n from './DialogItem.module.css'

const DialogItem = (props) => {
  return (
    <div className={n.dialog}>
      <img src={props.src} className={n.avatar} />
      <NavLink to={'/dialogs/' + props.id} className={dialogData => dialogData.isActive ? n.active : n.item}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem