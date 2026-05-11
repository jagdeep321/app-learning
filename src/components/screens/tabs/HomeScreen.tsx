import React, { useEffect, useState } from 'react';
import {
    Text,
    TextInput,
    View,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const { width } = Dimensions.get('window');

export function HomeScreen() {
    const navigation = useNavigation<any>();
    const [value, setValue] = useState<string>("guri");
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        getGetData();
    }, []);

    const getGetData = async () => {

        await fetch("https://fakestoreapi.com/products")
        .then(async (res: any) => {
            const data = await res.json();
            setProducts(data);
        })
        .catch((e: any) => {
            console.error("Error fetching products:", e);
        })


        // try {
        //     const response = await fetch("https://fakestoreapi.com/products");
        //     const data = await response.json();
        //     setProducts(data);
        // } catch (error) {
        //     console.error("Error fetching products:", error);
        // }
    };

    const renderProductItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.infoContainer}>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{item.category.toUpperCase()}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>${item.price}</Text>
                    <View style={styles.ratingBadge}>
                        <Text style={styles.ratingText}>★ {item.rating.rate}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TextInput
                    style={styles.searchBar}
                    placeholder='Search products...'
                    onChangeText={(val) => setValue(val)}
                />
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProductItem}
                numColumns={2} // Premium Grid Layout
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA', // Light grey background
    },
    header: {
        padding: 20,
        backgroundColor: '#FFF',
    },
    searchBar: {
        backgroundColor: '#F1F3F5',
        padding: 12,
        borderRadius: 12,
        fontSize: 16,
    },
    listContent: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        margin: 8,
        flex: 1,
        width: (width / 2) - 24, // Responsive width
        padding: 12,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // Elevation for Android
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    infoContainer: {
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#212529',
        marginBottom: 4,
    },
    category: {
        fontSize: 10,
        color: '#868E96',
        fontWeight: '700',
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#228BE6', // Premium Blue
    },
    ratingBadge: {
        backgroundColor: '#FFF9DB',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
    },
    ratingText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#F59F00',
    }
});