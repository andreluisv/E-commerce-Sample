import React from 'react';
import { Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import NewProduct from '../screens/NewProduct';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: true }}
    >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerTitle: <Text>Home</Text>,
            }}
        />

        <Stack.Screen 
            name="NewProduct"
            component={NewProduct}
            options={{
                headerTitle: <Text>New Product</Text>,
            }}
        />
    </Stack.Navigator>
  );
}

export default RootStack;