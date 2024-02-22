import React from 'react';
import HomePage from '../page/Home';
import LeaderBoard from '../page/LeaderBoard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class Navbar extends React.Component{
  render(){
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Leader Board') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
 
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
 
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Leader Board" component={LeaderBoard} />
      </Tab.Navigator>
    );
  }
}