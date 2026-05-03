import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/components/HomeScreen';
import { AboutScreen } from './src/components/AboutScreen';
import { Hero } from './src/components/Hero';
import Stackscreen from './src/components/screens/StackNavigator';
import { MyTabs } from './src/components/screens/BottomTabs';
// import { Text } from 'react-native/types_generated/index';


export default function App() {


  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>

        <MyTabs />

        {/* <Stackscreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>


  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#341a1a',
  }
});