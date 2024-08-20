import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,Image,TouchableOpacity,FlatList,
    useColorScheme,TouchableHighlight,Alert,GestureResponderEvent,
    View,TextInput,
    Button
} from 'react-native';
import {

  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Pfp: React.FC = () =>{
    const posts = [
        require('./../Images/bench.png'),
        require('./../Images/eren.png'),
        require('./../Images/got.png'),
        require('./../Images/homelander.png'),
        require('./../Images/mikasa.png'),
        require('./../Images/thorfinn.png'),
        require('./../Images/Clairo.png'),
        require('./../Images/Nirvana.png'),
        require('./../Images/LanaDelRey.png'),
    ];
    const numberOfposts = posts.length;
    return(
        <View style = {styles.parent}>
            <View style = {styles.profContainer}>
                <Image source={require('./../Images/erenPfp.png')} style = {styles.profImage}/>
                <Text style = {styles.name}>Bbo</Text>
                <Text style = {styles.about}>Giza Systems Intern</Text>
            </View>
            <View style = {styles.statsContainer}>
                <View style = {styles.stat}>
                    <Text style = {styles.number}>{numberOfposts}</Text>
                    <Text style = {styles.label}>Posts</Text>
                </View>
                <View style = {styles.stat}>
                    <Text style = {styles.number}>30k</Text>
                    <Text style = {styles.label}>Followers</Text>
                </View>
                <View style = {styles.stat}>
                    <Text style = {styles.number}>500</Text>
                    <Text style = {styles.label}>Following</Text>
                </View>
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.follow}>
                    <Text style = {styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.message}>
                    <Text style = {styles.buttonText}>Message</Text>
                </TouchableOpacity>
            </View>
            <Text style = {styles.post}>Post</Text>
            <FlatList
                
                data={posts}
                renderItem={({ item }) => <Image source={item} style={styles.postImage} />}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                style={styles.flatlist}
                showsVerticalScrollIndicator={true}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#F9F7F7',
    },
    profContainer: {
        marginTop: "7%",
        alignItems: 'center',
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
    },
    profImage: {
        width: 125,
        height: 125,
        borderRadius: 125/2,
        marginBottom: 15,
    },
    name:{
        fontWeight:'bold',
        fontSize:36,
        color: '#112D4E',
    },
    about:{
        fontSize:16,
        color:'#3F72AF'
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: "12%",
        marginLeft: '2%',
    },
    stat:{
        alignItems: 'center',
    },
    number:{
        fontSize:28,
        color: '#3F72AF',
        fontWeight:'bold'
    },
    label:{
        color: '#112D4E',
        fontSize:24,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        gap: 20,
    },
    follow:{
        backgroundColor: '#3F72AF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    message:{
        backgroundColor: '#3F72AF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flex: 1,
    },
    buttonText:{
        color:"#F9F7F7",
        alignSelf:'center',
        fontSize: 16,
    },
    post:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#112D4E',
        marginTop: "5%",
        marginHorizontal: "5%",
        marginBottom: "5%"
    },
    postImage:{
        width: 125,
        height: 125,
        margin: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    flatlist:{
        flex: 1,
    },
});

export default Pfp;

//1440 x 3120 pixels