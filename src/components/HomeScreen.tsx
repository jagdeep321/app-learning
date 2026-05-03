import {  Button, ScrollView, Text, View } from "react-native";

import { Link, useNavigation } from "@react-navigation/native";

export function HomeScreen() {

 const navigation = useNavigation<any>()

    return (
        <View>
            <Text>Home Screen</Text>

            <Button onPress={()=>{
                navigation.navigate('About')
            }} title="About" />


        </View>
    )
}