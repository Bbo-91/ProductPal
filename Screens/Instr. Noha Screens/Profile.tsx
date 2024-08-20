import { StyleSheet, Text, View,Image,TouchableOpacity,Alert,GestureResponderEvent,FlatList,ScrollView,Button } from 'react-native'
import React, { useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = (navigation) => {
    const [userName,setUserNam]  = useState('')
    const image2 = require('../Images/profile.jpg')

    const handlePress = () => {
        getData();
       // Alert.alert('Welcome' + '  ');
       console.log("test");
      };

      const getData =  () => {
        try {
          const value =  AsyncStorage.getItem('account');
          console.log(value)
          if (value !== null) {
            setUserNam(value);
          }else{
            console.log("value is null")
          }
        } catch (e) {
          console.error('Failed to fetch the data from storage', e);
        }
      };
  
      const images = [
        require('../Images/image1.jpg'),
        require('../Images/image2.jpg'),
        require('../Images/image3.jpeg'),
        require('../Images/image4.jpeg'),
        require('../Images/image3.jpeg'),
        require('../Images/image4.jpeg'),
        // require('../Images/image5.jpeg'),
        // require('../Images/image5.jpeg'),
      ];
      interface CustomButtonProps {
          text: string;
          backgroundColor?: string;
          onPress: (event: GestureResponderEvent) => void;
        }
    const CustomButton: React.FC<CustomButtonProps> = ({ text, backgroundColor = '#3498db', onPress }) => {
        return (
          <TouchableOpacity 
            style={[styles.button, { backgroundColor }]} 
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        );
      };
      const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item} style={styles.imageList} />
        </View>
      );

    //   useEffect(() => {
    //     getData(); // call this code when items in list changed
    //   }, []);
  return (
    <ScrollView style ={styles.container}>
        {/* <View style ={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
        <Button
        title="LogOut"
        onPress={() => navigation.goBack()}
      />
        </View> */}
        <View style ={styles.head}>
         <Image  style ={styles.image} source={require('../Images/profile.jpg')}></Image>
         <Text style={styles.name}>{userName}</Text>
         <Text style={styles.job}>Developer</Text>
        </View>
        <View style = {styles.content}>
              <View style = {styles.subContent}>
                  <Text style={[styles.text,{color:"orange"}]}>80</Text>
                  <Text style={styles.text}>Posts</Text>
              </View>
              <View style = {styles.subContent}>
                  <Text style={[styles.text,{color:"orange"}]}>80</Text>
                  <Text style={styles.text}>Followers</Text>
              </View>
              <View style={styles.subContent}>
                  <Text style={[styles.text, { color: "orange" }]}>80</Text>
                  <Text style={styles.text}>Following</Text>
              </View>
          </View>
          <View style={styles.buttons}>
              <CustomButton
                  text="Follow"
                  backgroundColor="orange"
                  onPress={handlePress}
              />
              <CustomButton
                  text="Message"
                  backgroundColor="orange"
                  onPress={handlePress}
              />
          </View>
          <Text style={styles.listTitle}>Posts</Text>
          <FlatList style={styles.list}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
       // backgroundColor: "white",
        flex: 1,
        flexDirection: "cloumn",
        paddingTop:50,
        minWidth:"100%",

    }, head: {
        justifyContent: "flex-start",
        alignItems: "center",
        // flex:1
    }, content: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
    }, text: {
        textAlign: "center",
    },list:{
        paddingLeft:20,
        paddingRight:20
    },imageContainer:{
        padding:10
    }
    , subContent: {
        justifyContent: "center",
        alignItems: "center",
        gap:10
    },buttons:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft: 30,
        paddingRight: 30,
    },button:{
        //marginTop:"10%",
        alignSelf:"center",
        borderWidth:1,
        padding:10,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor:"#55e23c",
        minWidth:"40%",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,

    }, listTitle: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
    }, buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        textAlign: 'center',
    }
    , image: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 10,
        // marginTop: '20%',
        backgroundColor: "blue",
        borderRadius: 50,
    },imageList:{
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 10,
        // marginTop: '20%',
        backgroundColor: "blue",
        borderRadius: 20,
    }
    , name: {
        fontSize: 25,
        color:"black"
    },job:{
        fontSize:20,
        color:"orange"
    }
})