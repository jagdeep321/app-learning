import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0)
    const refText = useRef<any>(null)
    const text = useRef<any>(null)

    

    const updateRef = () =>{

        text.current.setNativeProps({
            style: {
                color: "red",
                fontSize: 30
            }
        })

        // refText.current.setNativeProps({
        //     style: {
        //         color: "red",
        //         fontSize: 30
        //     }
        // })

        // refText.current.focus()

        // store value
        // ref.current  = ref.current + 1
        // Alert.alert(`ref count : ${ref.current}`)
    }



    return (
        <View>
            <Text ref={text} >UseRefHook</Text>
            {/* <Text>count: {ref.current}</Text> */}
            <TextInput ref={refText}/>
            <TouchableOpacity style={{backgroundColor:"red"}} onPress={updateRef } >
                <Text>button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UseRefHook