import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Jaggu from './Jaggu';

export function ProfileScreen({route,navigations}:any) {
    console.log("data comminmg from Home page : ",route.params.data);

    const data = route.params.data
    
    const navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
            <Jaggu name={data.name} />
        </View>
    );
}