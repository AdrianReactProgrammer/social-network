import React from 'react'
import n from './SearchMusic.module.css'

const SearchMusic = (props) => {

  let newSearchRequest = React.createRef()

  let addRequest = () => {
    let text = newSearchRequest.current.value;
    alert(text)
  }

  return (
    <div className={n.searchMusic}>
      <textarea ref={newSearchRequest} className={n.input} />
      <button onClick={addRequest} className={n.button}>Search</button>
    </div>
  )
}

export default SearchMusic;