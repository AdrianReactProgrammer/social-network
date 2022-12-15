import m from './Music.module.css';
import SearchMusic from './SearchMusic/SearchMusic';

const Music = () => {
  return (
    <div className={m.content}>
      <SearchMusic />
      Music
    </div>
  );
};

export default Music;