import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Button, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Login from './src/screens/Login';
import { Provider } from 'react-redux'
import store from './store';
import Navigator from './routes/index';


function App() {

  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'login', title: 'Login', icon: 'login' },
  //   { key: 'home', title: 'Home', icon: 'home' },
  //   { key: 'cart', title: 'Cart', icon: 'cart' },
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   login: Login,
  //   home: Home, 
  //   cart: Cart
  // });

  // const renderScene = ({ route, jumpTo }) => {
  //   switch (route.key) {
  //     case 'login':
  //       return <Login jumpTo={jumpTo} />;
  //     case 'home':
  //       return <Home jumpTo={jumpTo} />;
  //     case 'cart':
  //       return <Cart jumpTo={jumpTo} />;
  //   }
  // }

  return (
    <Provider store={store}>
      <Navigator />
      {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      /> */}
    </Provider>
  );
};

export default App;

