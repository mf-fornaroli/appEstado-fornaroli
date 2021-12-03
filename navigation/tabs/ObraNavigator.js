import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/Colors';

import ObraListScreen from '../../screens/ObraListScreen';
import ObraScreen from '../../screens/ObraScreen';

const Stack = createNativeStackNavigator();

const ObraNavigator = () => (
 <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: (Platform.OS === 'android' || Platform.OS === 'web') ? 'white' : COLORS.primary,
      }}
      initialRouteName="ObraList"
    >
      <Stack.Screen
        name="ObraList"
        component={ObraListScreen}
        options={{
          title: 'Listado de Obras',
        
        }}
      />
      <Stack.Screen
        name="Obra"
        component={ObraScreen}
        options={{
          title: 'Alta de Obra',
         
        }}
      />
    </Stack.Navigator>

);

const styles = StyleSheet.create({
  header: {
    backgroundColor: (Platform.OS === 'android' || Platform.OS === 'web') ? COLORS.primary : 'white',
  }})
export default ObraNavigator;