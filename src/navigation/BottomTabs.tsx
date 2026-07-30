import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import CartScreen from '../screen/CartScreen';
import ProfileScreen from '../screen/ProfileScreen';

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderHomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="house" color={color} size={size} solid />
);

const renderSearchIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="magnifying-glass" color={color} size={size} solid />
);

const renderCartIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="cart-shopping" color={color} size={size} solid />
);

const renderProfileIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="user" color={color} size={size} solid />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1273DE',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: renderHomeIcon }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarIcon: renderSearchIcon }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarIcon: renderCartIcon }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: renderProfileIcon }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;