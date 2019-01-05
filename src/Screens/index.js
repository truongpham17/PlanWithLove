import { createStackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';

export default createStackNavigator({
    Main: {
        screen: MainScreen,
    }
});
