import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabs/TabNavigator';

const MainNavigator = () => {
 return (
  <NavigationContainer>
   <TabNavigator />
  </NavigationContainer>
 )
};

export default MainNavigator;