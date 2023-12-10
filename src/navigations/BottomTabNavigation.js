// Import necessary modules
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import PostsScreen from '../screens/PostsScreen';

// Create a BottomTabNavigator
const Tab = createBottomTabNavigator();

// Main App component
const BottomTabNavigation = () => (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: '#624980',
      tabBarInactiveTintColor: '#ac80e0',
      tabBarStyle: {
        backgroundColor: '#fcd9d7',
      },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Icon size={size} color={color} name="home-outline" />
        )
      }} />
      <Tab.Screen name="Posts" component={PostsScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Icon size={size} color={color} name="help-circle-outline" />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Icon size={size} color={color} name="person-outline" />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Icon size={size} color={color} name="settings-outline" />
        )
      }} />
      
    </Tab.Navigator>
);

export default BottomTabNavigation;
