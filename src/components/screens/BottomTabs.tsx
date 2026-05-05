import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './tabs/HomeScreen';
import { ProfileScreen } from './tabs/ProfileScreen';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
declare module 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({ navigation, route }) => ({
            //  headerShown:false
            // headerStyle:{
            //     backgroundColor:"#000"
            // },
            headerTitleAlign: "center",

            tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
                let label = ''

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                    label = 'homehu'
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'user' : 'user-o';
                    label = 'prof'
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',

        })} >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerRight: () => (
                    <Button onPress={() => {

                    }}>msg</Button>
                ),
                headerLeft: () => (
                    <Button onPress={() => {

                    }}>logo</Button>
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}