import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import i18n from './Resources';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};


const Movies = () => {

  const [isLoading, setLoading] = useState(false); // boolean true or false

  const [data, setData] = useState<Movie[]>([]);

  const { t } = useTranslation();


  enum sds {

  }

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //  const  list = getMovies();
  // }, []);

  useEffect(() => {
    // Set the initial language based on device locale
    const locale = RNLocalize.getLocales()[0].languageCode;
    console.log(RNLocalize.getLocales()[0])
    i18n.changeLanguage(locale);
  }, []);

  const changeLang = () => {
    i18n.changeLanguage('fr');
    console.log(RNLocalize.getLocales()[0])
  }
  const changeLangToEng = () => {
    i18n.changeLanguage('en');
    console.log(RNLocalize.getLocales()[0])
  }
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end", gap: 10 }}>
        <Button title='Frensh' onPress={changeLang} />
        <Button title='English' onPress={changeLangToEng} />
      </View>

      <Text style={{ marginBottom: 20 }}>{t('welcome')}</Text>


      <Text>{t('greeting', { name: 'abanob' })}</Text>

      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            </View>

          )}
        />
      )}
    </View>
  );
}

export default Movies

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderColor: "red",
    borderRadius: 5,
    backgroundColor: "pink",
    gap: 10

  },
})