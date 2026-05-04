import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Jaggu from './Jaggu';

export function HomeScreen() {
    const navigation = useNavigation<any>();
    const [value, setValue] = useState<string>("guri")

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput placeholder='Enter your name' onChangeText={(value) => {
                setValue(value)
            }} />
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Profile', { data: { name: value, age: 19 } })}>
                Go to Profile
            </Button>

            <Jaggu
                name={value}
            />
        </View>
    );
}