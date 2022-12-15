import n from '../Communities.module.css'

const CommunitiesElement = (props) => {
  return (
    <div className={n.CommunityElement}>
      <h4 className={n.name}>{props.name}</h4>
      <p className={n.description}>{props.description}</p>
    </div>
  )
}

export default CommunitiesElement;