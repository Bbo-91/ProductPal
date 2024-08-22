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
    const [product, setProduct] = useState<Product | null>(null);
    const navigation = useNavigation();

    useEffect(() => {
        const loadProduct = async () => {
            const jsonValue = await AsyncStorage.getItem('selectedProduct');
            if (jsonValue) {
                setProduct(JSON.parse(jsonValue));
            }
        };
        loadProduct();
    }, []);

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{product.title}</Text>
            <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="contain"
            />
            <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
                <Text style={styles.backButtonText}>Back to Products</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7F7',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F7F7',
    },
    loadingText: {
        fontSize: 18,
        color: '#333',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#888888',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#3F72AF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});