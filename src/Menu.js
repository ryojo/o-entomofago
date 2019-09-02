
import {createDrawerNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation';
import Main from './Main';
import Fale from './Fale';
import Login from './Login';
export default createAppContainer(
createSwitchNavigator({
 Login,
Main
})
)










