import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type User = {
    id: number;
    username: string;
    photo: string;
    company: string;
};

const UsersData: React.FC = () => {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getAPIData = async () => {
        try {
            const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
            const result = await response.json();
            // Does The API automatically assign the right data to the right var?
            // do we have to map when having excess fields?
            const mappedUsers: User[] = result.map((user: any) => ({
                id: user.id,
                username: user.username,
                photo: user.photo,
                company: user.company
            }));
            setData(mappedUsers);
            setFilteredData(mappedUsers);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAPIData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(user =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()));
        console.log("filtered arr count " + filtered.length);
        setFilteredData(filtered);

    }, [searchQuery]);

    const layout = ({ item }: { item: User }) => (
        <View style={styles.container}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.company}>{item.company}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.parent}>
            {loading ? (
                <ActivityIndicator
                    size='large'
                    color='#00ADB5'
                />
            ) : (
                <SafeAreaView>
                    <View style={{}}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor='#393E46'
                            style={styles.input}
                            value={searchQuery} //what does value do?
                            onChangeText={(text) => setSearchQuery(text)}
                        //onChangeText={setSearchQuery}
                        />
                    </View>
                    <FlatList<User>
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={layout}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        padding: 16,
        backgroundColor: "#222831",
        justifyContent: "center",
    },
    container: {
        flexDirection: 'row',
        marginVertical: "3%",
        // marginHorizontal: "5%",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#393E46",
        borderRadius: 10,
        padding: 10,
    },
    photo: {
        width: 75,
        height: 75,
        borderRadius: 10,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        gap: 3,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00ADB5',
    },
    company: {
        fontSize: 14,
        color: '#EEEEEE',
    },
    input: {
        width: "100%",
        marginTop: "13%",
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#393E46",
        color: '#EEEEEE',
        alignSelf: 'flex-start',
    },
});

export default UsersData;
