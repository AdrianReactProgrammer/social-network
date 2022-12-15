import n from './Communities.module.css';
import CommunitiesElement from './CommunitiesElement/CommunitiesElement';

const Communities = (props) => {

  let communityElement = props.communities
  .map(c => <CommunitiesElement name={c.name} description={c.description} />)

  return (
    <div>
      <h2 className={n.mainTittle}>Communities</h2>
      {communityElement}
    </div>  
  )
}

export default Communities;