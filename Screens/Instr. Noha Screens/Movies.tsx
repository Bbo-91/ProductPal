// import { StyleSheet, Text, View,ActivityIndicator,FlatList } from 'react-native'
// import React, { useState,useEffect }  from 'react'

// type Movie = {
//     id: string;
//     title: string;
//     releaseYear: string;
//   };

// const Movies = () => {

//     const [isLoading, setLoading] = useState(true); // boolean true or false

//     const [data, setData] = useState<Movie[]>([]);

//     const getMovies = async () => {
//         try {
//           const response = await fetch('https://reactnative.dev/movies.json');
//           const json = await response.json();
//           console.log(json.movies)
//           setData(json.movies);

//         } catch (error) {
//           console.error(error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       useEffect(() => {
//        const  list = getMovies();
//       }, []);

//    return (
//     <View style={{flex: 1, padding: 24}}>

//       {isLoading === true ? (
//         <ActivityIndicator />
//            ) : (
//                <FlatList
//                    data={data}
//                    keyExtractor={({ id }) => id}
//                    renderItem={({ item }) => (
//                        <View style = {styles.card}>
//                            <Text>
//                                {item.title}, {item.releaseYear}
//                            </Text>
//                        </View>

//                    )}
//                />
//            )}
//     </View>
//   );
// }

// export default Movies

// const styles = StyleSheet.create({
//     card:{
//         flex:1,
//         borderColor:2,
//         borderRadius:5,
//         bacckgroundColor:"red",
//         gap:10

//     },
// })
