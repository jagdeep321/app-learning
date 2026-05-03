import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export function ProfileScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
        </View>
    );
}