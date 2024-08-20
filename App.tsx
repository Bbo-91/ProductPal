/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  useColorScheme,
  TouchableHighlight,
  Alert,
  GestureResponderEvent,
  View,
  TextInput,
  Platform,
} from 'react-native';
// import Home from './Screens/Home';
// import Pfp from './Screens/pfp';
// import Login from './Screens/Login';
// import UsersData from './Screens/info';
import Register from './Screens/Register';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Login from './Screens/Login';
//import { Image } from './node_modules/react-native/types/index';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  //  const [text, onChangeText] = React.useState('Useless Text');
  // const [email, onChangeEmail] = React.useState('');
  // const [password, onChangePassword] = React.useState('');
  // const onPress = () => console.log('Hello' + email);

  // const handlePress = () => {Alert.alert('Welcome' + '  ' + email)};
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Register" component={Register} />
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      </NavigationContainer> */}
      {/* <UsersData /> */}
      <Register />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
