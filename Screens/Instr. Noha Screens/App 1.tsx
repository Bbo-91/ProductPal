// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React, { useState } from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,Image,TouchableOpacity,FlatList,
//   useColorScheme,TouchableHighlight,Alert,GestureResponderEvent,
//   View,TextInput
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import  Login  from "./Screens/Login";
// //import { Image } from './node_modules/react-native/types/index';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;



// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

// //  const [text, onChangeText] = React.useState('Useless Text');
//   const [email, onChangeEmail] = React.useState('');
//   const [password, onChangePassword] = React.useState('');
//   const onPress = () => console.log('Hello' + email);

//   const handlePress = () => {
//     Alert.alert('Welcome' + '  ' + email);
//   };



//   const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d73',
//       title: 'Fourth Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-14551e29d73',
//       title: 'Fourth Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e2d73',
//       title: 'Mariam Mostafa',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e9d73',
//       title: 'ahmed Mahmoud',
//     }, {
//       id: '58694a0f-3da1-471f-bd96-145571e9d74',
//       title: 'Hanna Ali',
//     }, {
//       id: '58694a0f-3da1-471f-bd96-145571e9d79',
//       title: 'Ibrahime ',
//     }, {
//       id: '58694a0f-3da1-471f-bd96-145571e9d71',
//       title: 'Mostafa',
//     }, {
//       id: '58694a0f-3da1-471f-bd96-145571e9d72',
//       title: 'Ali mohamed',

//     },
//   ];

//   type ItemProps = {title: string};

//   const FlatListItem = ({title}: ItemProps) => (
//     <TouchableOpacity onPress={onPress}>
//     <View style={styles.item}>
//       <Image style ={styles.logo} source ={require('./Images/testImage.jpeg')}/>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//     </TouchableOpacity>
//   );
//   return (

//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         animated={true}
//         barStyle="default"
//         translucent={true}
//         backgroundColor="transparent"
//       />
      
//       {/* <Login/> */}
//      <FlatList style ={{flex:1,marginTop:10,maxWidth:"90%"}}
//         data={DATA}
//         renderItem={({item}) => <FlatListItem title={item.title} />}
//         keyExtractor={item => item.id}
//       />

// {/* <ScrollView style={styles.scrollView}>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView> */}

//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:"cloumn",
//     justifyContent: 'flex-start', 
//     alignItems: 'center',
//     backgroundColor:"#dcdcdc", 
//     gap:10,
//     padding: 10,
//    // marginTop: "12%",
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//     flex:1,

//   },logo:{
//     maxWidth:80,
//     maxHeight:80,
//     borderRadius:40,
//   },
//   headline: {
//     // flex: 1,
//     flexDirection: "row",
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     alignSelf: "center",
//     marginTop: "20%",
//     gap: 10,
//   }, subTiltle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   }, form: {
//     flex:1,
//     flexDirection: "column",

//   },
//   item: {
//     flex:1,
//     flexDirection:"row",
//     backgroundColor: "white",
//     justifyContent:"flex-start",
//     alignItems:"center",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     borderColor: '#fff',
//     //minWidth:"80%",
//     gap:15
//   },
//   title: {
//     fontSize: 30,
//     textAlign:"center"
//   },
  
// });

// export default App;
