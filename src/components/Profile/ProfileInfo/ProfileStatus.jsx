import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import n from './ProfileInfo.module.css'

const ProfileStatusNew = (props) => {

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.setStatus(status)
  }

  let [status, setStatus] = useState(props.status)

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return <>
    {!editMode && <span className={n.status} onDoubleClick={props.authUserId == props.userId ? activateEditMode : null}>
      {props.status != null ? props.status : 'Введите статус'}
    </span>}
    {editMode && <textarea className={n.editStatus} value={status} autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} />}
  </>

}

export default ProfileStatusNew