import Settings from './Settings';
import { connect } from 'react-redux';
import { getIsAuth } from '../../redux/selectors/userAuth-selectors';

const mstp = (state) => ({
  isAuth: getIsAuth(state)
})

const SettingsContainer = connect(mstp)(Settings)

export default SettingsContainer