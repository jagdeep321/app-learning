import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import { HomeScreen } from '../HomeScreen';
import { AboutScreen } from '../AboutScreen';

const Stack = createNativeStackNavigator()
export default function Stackscreen() {


  return (
    <SafeAreaProvider style={styles.container}>

        <Stack.Navigator >


          <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Home Screen" }} />
          <Stack.Screen name='About' component={AboutScreen} options={{ title: "About Screen" }} />

        </Stack.Navigator>
    </SafeAreaProvider>


  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#341a1a',
  }
});