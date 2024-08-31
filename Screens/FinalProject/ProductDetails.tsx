import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
};
export default function ProductDetails() {
    const [product, setProduct] = useState<Product>();
    const navigation = useNavigation();

    const loadProduct = async () => {
        const jsonValue = await AsyncStorage.getItem('selectedProduct');
        if (jsonValue) {
            setProduct(JSON.parse(jsonValue));
        }
    };
    useEffect(() => {
        loadProduct();
    }, []);

    if (!product) {
        return (
            <View style={styles.parent}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.parent}>
            <Text style={styles.heading}>{product.title}</Text>
            <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.productPrice}>${product.price}</Text>
            <Text style={styles.About}>About</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
                <Text style={styles.backButtonText}>Back to Products</Text>
            </TouchableOpacity>
        </View>
    );
}

// f4f1de ~ Eggshell
// e07a5f ~ Burnt sienna
// 3d405b ~ Delft Blue
// 81b29a ~ Cambridge blue
// f2cc8f ~ Sunset
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#f4f1de',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3d405b',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 300,
        aspectRatio: 1,
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#888888',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#3d405b',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#e07a5f',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    About: {
        color: '#3d405b',
        fontSize: 32,
        marginBottom: 10,
        fontWeight: 'bold',
    },
});