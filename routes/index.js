import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../src/screens/Home';
import Login from '../src/screens/Login';
import Cart from '../src/screens/Cart';
import Men from '../src/screens/category/Men'
import Women from '../src/screens/category/women'
// import BottomNavbar from '../src/screens/BottomNavigator';
const screens = {
    Login:{
        screen: Login
    },
    Kid:{
        screen: Home
    },
    Men:{
      screen: Men  
    },
    Women:{
        screen: Women
    },
    Cart:{
        screen: Cart
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);