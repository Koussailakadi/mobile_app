import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from './screens/Home';
import Photo from './screens/Photo';
import Portfolio from './screens/Portfolio';
//custom Fonts
import customFonts from './styles/fonts/Fonts';
import AppStyles from './styles/style/AppStyles'

// keep the splash sreen visibile while fetch resources
SplashScreen.preventAutoHideAsync(); 

// stack 
const Stack = createNativeStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts(customFonts);
  
  if(!fontLoaded){
    
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  }
  else{
    SplashScreen.hideAsync(); 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Photo' component={Photo}/>
        <Stack.Screen name='Portfolio' component={Portfolio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


