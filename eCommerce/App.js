import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Data from './src/contexts/data';

export default function App(){
  return (
    <NavigationContainer>
      <Data>
        <Routes />
      </Data>
    </NavigationContainer>
  );
};