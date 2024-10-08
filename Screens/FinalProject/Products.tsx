import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Products: undefined;
    ProductDetails: undefined;
};

type ProductsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Products'
>;

type ProductDetailsRouteProp = RouteProp<
    RootStackParamList,
    'ProductDetails'
>;



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
    };
};
const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return await response.json();
};

const fetchProducts = async (category?: string, searchQuery?: string): Promise<Product[]> => {
    let url = 'https://fakestoreapi.com/products';

    if (category) {
        url += `/category/${category}`;
    }

    const response = await fetch(url);
    const products: Product[] = await response.json();

    if (searchQuery) {
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    return products;
};

export default function Products() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const navigation = useNavigation<ProductsScreenNavigationProp>();

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);

    useEffect(() => {
        fetchProducts(selectedCategory ?? undefined, searchQuery).then(setProducts);
    }, [selectedCategory, searchQuery]);

    const ProductPress = async (item: Product) => {
        await AsyncStorage.setItem('selectedProduct', JSON.stringify(item));
        navigation.navigate('ProductDetails');
    };

    const renderProductItem = ({ item }: { item: Product }) => (
        <TouchableOpacity
            style={styles.productContainer}
            onPress={() => ProductPress(item)}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.productImage}
                resizeMode="contain"
            />
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.productRate}>{item.rating.rate}⭐  ({item.rating.count}) review</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading2}>Welcome</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search Products..."
                    placeholderTextColor='#3d405b'
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            <Text style={styles.heading}>Categories</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            item === selectedCategory && styles.selectedCategoryButton,
                        ]}
                        onPress={() => setSelectedCategory(item)}
                    >
                        <Text style={styles.categoryText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={styles.productList}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
        </SafeAreaView>
    );
}

// f4f1de ~ Eggshell
// e07a5f ~ Burnt sienna
// 3d405b ~ Delft Blue
// 81b29a ~ Cambridge blue
// f2cc8f ~ Sunset

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1de',
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: '#e6d6bc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    categoryButton: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 22,
        backgroundColor: '#81b29a',
        borderRadius: 10,
        marginRight: 10,
        height: 40,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCategoryButton: {
        backgroundColor: '#e07a5f',
    },
    categoryText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'ultralight',
    },
    productList: {
        flexGrow: 1,
    },
    productContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        width: "45%",
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 120,
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3D405B'
    },
    productPrice: {
        fontSize: 16,
        color: '#888888',
    },
    heading: {
        fontWeight: 'bold',
        color: '#3D405B',
        fontSize: 20,
        paddingBottom: 10,
        marginLeft: 10,
    },
    heading2: {
        fontWeight: 'bold',
        color: '#3D405B',
        fontSize: 25,
        paddingBottom: 20,
        paddingTop: 10,
        marginLeft: 10,
    },
    productRate: {
        color: 'black',
        fontSize: 14,
        marginTop: 'auto',
        fontWeight: 'bold',
    },
});
