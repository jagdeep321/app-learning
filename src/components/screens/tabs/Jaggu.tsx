import { Text, View } from "react-native";

export default function Jaggu(props:{
    name:string
}){
    return (
        <View>
            <Text>i am {props.name}</Text>
        </View>
    )
}