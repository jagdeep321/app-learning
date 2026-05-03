import { Image, Text, TextInput, View } from "react-native";
import { heroStyles } from "../css/hero";


export function Hero() {


    return (
        <View style={heroStyles.container} >
            {/* <Image source={require('../assets/logo.jpg')} style={heroStyles.imageStyle} /> */}
            <Image
                style={heroStyles.imageStyle}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2GkPBHKQc2-y26G9zgQnDoUHrW3NNnXHWw&s' }}
            />
           


           

        </View>
    )
}

