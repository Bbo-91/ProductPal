import React from 'react';
import { TouchableOpacity, Text,Alert,TouchableHighlight,ScrollView,
    View,TextInput,StyleSheet, GestureResponderEvent } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme,userProfile } from '../Constant/Helper';
import {Status}  from '../Constant/Helper'

const Login: React.FC = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    
    const onPressSubmitButtonAbanob = () => {
      storeData()
      navigation.navigate('Posts')
    };
    const handlePress = () => {
      Alert.alert('Welcome' + '  ' + email);
    };
   const validate = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;  // ^\d{10}$ 12345678947
      if (reg.test(text) === false) {
        console.log("Email is Not Correct");
        onChangeEmail(text)
        return false;
      }
      else {
        onChangeEmail(text)
        console.log("Email is Correct");
      }
    }

    const checkUploadStatus = () =>{
      const state = Status.success

      if (state == Status.Completed) {

      }

    }
    interface CustomButtonProps {
        text: string;
        backgroundColor?: string;
        onPress: (event: GestureResponderEvent) => void;
      }

    const CustomButton: React.FC<CustomButtonProps> = ({ text, backgroundColor = '#3498db', onPress }) => {
        return (
          <TouchableOpacity 
            style={[styles.button, { backgroundColor }]} 
            onPress={onPress}
          >
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        );
      };

      const storeData = async () => {
        try {
          await AsyncStorage.setItem('account', email);
          console.log('Data saved successfully');
        } catch (e) {
          console.error('Failed to save the data to the storage', e);
        }
      };
return(
 <ScrollView>
   <View style={styles.form}>
       <View style={styles.headline}>
       <Text style={styles.subTiltle}>LOGIN</Text>
       </View>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(validate)}
          value={email}
          placeholder="enter your email"
        />
        <Text style={{ marginTop: 30 }}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(onChangePassword)}
          value={password}
          placeholder="enter your Password"

        />
        <TouchableOpacity style={styles.button} onPress={onPressSubmitButtonAbanob}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressSubmitButtonAbanob}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>

        <CustomButton 
        text="Login With Facebook" 
        backgroundColor="#dcdcdc" 
        onPress={handlePress} 
      />
      </View> 
      </ScrollView>
 );
};
const styles = StyleSheet.create({
    button:{
        marginTop:"10%",
        alignSelf:"center",
        borderWidth:1,
        padding:10,
        borderRadius: 10,
        borderColor: lightTheme.white,
        backgroundColor:"#55e23c",
        minWidth:"40%",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
      
      },buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color:"white",
        textAlign: lightTheme.textAlign,
      },form: {
        flex:1,
        flexDirection: "column",
        padding:20,
      },forget:{
        height:200,
        flexDirection:"row",
        marginTop:"5%",
        justifyContent:"flex-start",
        alignItems:"flex-start"
      },
      firstView :{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        alignSelf:"flex-start",
        minWidth:"80%",
        gap:20,
      },
      rightText:{
          minWidth:"20%",
          flexDirection:"row",
        //   alignSelf:"flex-end",
           justifyContent:"flex-end",

          //alignItems:"flex-end"
      },
      input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop:10,
        minWidth:"90%",
        width:"80%",
        borderRadius: 10,
      },
      headline: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: "center",
        marginTop: "20%",
        //gap: 10,
      }, subTiltle: {
        fontSize: 30,
        fontWeight: 'bold',
        color:lightTheme.textColor
      }
});
export default Login;