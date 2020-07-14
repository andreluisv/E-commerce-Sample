import React from 'react';
import { Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
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
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;