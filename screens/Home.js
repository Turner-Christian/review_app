import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'lorem Ipsum', key: '1' },
        { title: 'Pokemon', rating: 4, body: 'lorem Ipsum', key: '2' },
        { title: 'Final Fantasy', rating: 2, body: 'lorem Ipsum', key: '3' }
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Review-Details', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

