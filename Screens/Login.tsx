import React, { useEffect } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  TouchableOpacity, Text, Alert, TouchableHighlight, ScrollView,
  View, TextInput, StyleSheet, GestureResponderEvent, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const RetrieveUserData = async () => {
    try {
      const UserData = await AsyncStorage.getItem('user');
      if (UserData) {
        const user = JSON.parse(UserData)
        console.log(`${user.name}`);
        console.log(`${user.email}`);
        console.log(`${user.password}`);
        if (user.password === password && user.email === email) {
          console.log("Meow")
          Alert.alert('Welcome', `Hello ${user.name}`);
        }
        else {
          console.log("Not Meow")
          Alert.alert('Error', 'Invalid email or password');
        }
      }
      else {
        Alert.alert('Error', 'User is not registered');
      }
    }
    catch (error) {
      console.log(error);
      console.log('Failed to retrieve user data');
    }
  }

  // const onPress = () => console.log('Hello' + '  ' + email);
  // const handlePress = () => {
  // Alert.alert('Welcome' + '  ' + email);
  // };

  // interface CustomButtonProps {
  //     text: string;
  //     backgroundColor?: string;
  //     onPress: (event: GestureResponderEvent) => void;
  // }

  // const CustomButton: React.FC<CustomButtonProps> = ({ text, backgroundColor = '#3498db', onPress }) => {
  //     return (
  //       <TouchableOpacity 
  //         style={[styles.button, { backgroundColor }]} 
  //         onPress={onPress}
  //       >
  //         <Text style={styles.buttonText}>{text}</Text>
  //       </TouchableOpacity>
  //     );
  //   };

  return (
    <View style={styles.parent}>
      <Text style={styles.title} >LOGIN</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input}
        placeholder="Enter your email address"
        placeholderTextColor="#7a7878"
        keyboardType='email-address'
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#7a7878"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <View style={styles.block}>
        <View style={{ flex: 1 }}>
          <BouncyCheckbox style={{ marginTop: 10, marginLeft: 10 }}
            size={25}
            fillColor="#393E46"
            text="Remember me"
            unFillColor="#222831"
            textStyle={{
              textDecorationLine: "none",
              color: '#EEEEEE',
              //innerIconStyle={{ borderWidth: 2 }}
              //iconStyle={{ borderColor: "red" }}
              //onPress={(isChecked: boolean) => {console.log(isChecked)}}
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{
            fontSize: 18,
            alignSelf: 'flex-start',
            marginLeft: "20%",
            marginBottom: 8,
            marginTop: 10,
            color: '#EEEEEE',
            fontWeight: "bold",
          }}>Forgot Password?</Text>
        </View>
      </View>
      {/* <Button
    title = "Submit"
    color="#55c2da"
    /> */}
      <View style={[{ width: "50%", margin: "20%" }]}>
        <Button
          title="Submit"
          color="#00ADB5"
          onPress={RetrieveUserData}
        />
      </View>
      <View>
        <Text style={styles.label}>Create an account</Text>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  button: {
    marginTop: "10%",
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: "#55e23c",
    minWidth: "40%",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,

  }, buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
  }, form: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
  }, forget: {
    height: 200,
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  firstView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    minWidth: "80%",
    gap: 20,
  },
  rightText: {
    minWidth: "20%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headline: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: "center",
    marginTop: "20%",
  },
  subTiltle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  parent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#222831',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: "20%",
    marginBottom: "30%",
    color: '#EEEEEE',
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: "1%",
    marginBottom: 8,
    marginTop: 10,
    color: '#EEEEEE',
  },
  input: {
    width: "100%",
    marginTop: 5,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#393E46",
    color: '#EEEEEE',
  },
  block: {
    marginTop: 10,
    flexDirection: 'row',
    width: "100%",
    height: "7%",
  }
});
export default Login;