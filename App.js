import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet, View } from 'react-native';
import Home from '././src/screens/Home'
import Cart from './src/screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Product from './src/screens/Product';
const Stack = createStackNavigator();

function App() {


  const myOptions = {
    title:"CliffexCart",
    headerTintColor:"black",
    headerStyle:{
      backgroundColor:"white",
    }
  }
  return (
    <View style={styles.cointainer}>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen 
        name="CliffexCart" 
        component={Home} 
        options= {myOptions}/>
        <Stack.Screen name="cart" component={Cart} options={{...myOptions,title:"Add To Cart"}}/>
        <Stack.Screen name="Product" component={Product} options={{...myOptions, title:"Product"}} />
      </Stack.Navigator>
      </Provider>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  }
})

