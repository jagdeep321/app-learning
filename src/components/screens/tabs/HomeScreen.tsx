import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export function HomeScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Jaggu')}>
                Go to Profile
            </Button>
        </View>
    );
}