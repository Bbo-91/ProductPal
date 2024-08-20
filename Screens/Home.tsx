import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, Image, TouchableOpacity, FlatList,
  useColorScheme, TouchableHighlight, Alert, GestureResponderEvent,
  View, TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home: React.FC = () => {
  const onPress = () => { Alert.alert('Added to Favoutrites') };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Places to Stay</Text>
      <ScrollView style={styles.container}>
        <Card
          image={require('./../Images/marbella.jpg')}
          location="Marbella, Spain"
          date="Apr 23 - May 5"
          price="$200 / night"
          rating="4.45"
          reviews="124 reviews"
        />
        <Card
          image={require('./../Images/Baveno.png')}
          location="Baveno, Italy"
          date="Apr 25 - May 5"
          price="$320 / night"
          rating="4.81"
          reviews="409 reviews"
        />
        <Card
          image={require('./../Images/Balli.png')}
          location="Balli, Indonesia"
          date="Apr 27 - May 8"
          price="$150 / night"
          rating="4.73"
          reviews="151 reviews"
        />
      </ScrollView>
    </SafeAreaView>
  )
};
const Card: React.FC<{ image: any, location: string, date: string, price: string, rating: string, reviews: string }> = ({ image, location, date, price, rating, reviews }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.parent}>
        <View style={styles.block}>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.rating}>{rating}⭐</Text>
          <Text style={styles.reviews}> {reviews}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    color: 'black',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    elevation: 3,
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  image: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  parent: {
    padding: 15,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    fontSize: 14,
    color: '#6f6f71',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
  },
  lower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderColor: '#eee',
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 'auto'
  },
  reviews: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  // heartButton: {
  //   padding: 10,
  //   alignSelf: 'flex-start',
  //   position: 'absolute',
  // },
  // heart: {
  //   fontSize: 24,
  // },
});

export default Home;


//1440 x 3120 pixels