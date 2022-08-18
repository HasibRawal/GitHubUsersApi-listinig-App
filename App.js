import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GitUserList from './src/screens/GitUsersList';
import UserDetails from './src/screens/UserDetails';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserList"
          component={GitUserList}
          options={{title: 'GitHub Users'}}
        />
        <Stack.Screen
          name="detail"
          component={UserDetails}
          options={{title: 'User Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
