import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import React from 'react';
//import { SafeAreaView } from '../node_modules/react-native-safe-area-context/lib/typescript/src/SafeAreaView';
//import { ImageBackground, ImageSourcePropType } from '../node_modules/react-native/types/index';

const Home = ({navigation}) => {
  const img = require('../Images/villa1.jpeg');
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      imageProp: img,
      title: 'vlilla alexandria',
      itemRate: '4.5 (124 reviews)',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bv',
      imageProp: require('../Images/villa2.jpeg'),
      title: 'miami twin house',
      itemRate: '3.2 (50 reviews)',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28fv',
      imageProp: require('../Images/villa3.jpeg'),
      title: 'italy - Rome',
      itemRate: '3.2 (50 reviews)',
    },
  ];

  type ItemProps = {imageProp: any; title: string; itemRate: String};

  const HomeCard = ({imageProp, title, itemRate}: ItemProps) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <ImageBackground
          style={styles.logo}
          source={imageProp}
          imageStyle={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}>
          <Image
            source={require('../Images/hear.png')}
            style={styles.like}></Image>
        </ImageBackground>
      </View>
      <View style={{padding: 10, gap: 7}}>
        <View style={styles.head}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rateView}>
            <Image
              source={require('../Images/star.png')}
              style={{width: 15, height: 15}}
            />
            <Text style={styles.title}>{itemRate}</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Aprl 23 - 5 may</Text>
        <Text>200$/night </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={styles.headlineText}>Places to Stay</Text>
        <Button title="Profile" onPress={() => navigation.goBack()} />
      </View>

      <FlatList
        style={{padding: 20}}
        data={DATA}
        renderItem={({item}) => (
          <HomeCard
            imageProp={item.imageProp}
            title={item.title}
            itemRate={item.itemRate}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headlineText: {
    // alignSelf:"flexStart",
    fontSize: 25,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    padding: 15,
    // margin:15,
    marginRight: 10,
  },
  item: {
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    borderRadius: 15,
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity:  0.4,
    // shadowRadius: 3,
    // elevation: 5,
    marginBottom: 20,
    //padding:15,
  },
  logo: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
  like: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'center',
  },
  subTitle: {
    color: 'gray',
  },
  title: {
    fontSize: 20,
  },
});
