import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './tabs/HomeScreen';
import { ProfileScreen } from './tabs/ProfileScreen';
import { Button } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({ navigation, route }) => ({
            //  headerShown:false
            // headerStyle:{
            //     backgroundColor:"#000"
            // },
            headerTitleAlign: "center"
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