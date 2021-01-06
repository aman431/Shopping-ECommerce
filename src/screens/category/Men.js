import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Card, Button, Avatar, IconButton } from 'react-native-paper'
import { category,selectedItem } from '../../../actions/index';
import { connect } from 'react-redux';

const Men = ({ category, category_data, navigation, selectedItem, count }) => {

    let men = "men"
    useEffect(() => {
        category(men);
    }, [category]);
    const fetch_data= (item) => {
        return (
            <View>
                <Card key={item.id} style={styles.cards} >
                    <Card.Cover source={{ uri: item.imageURL }} />
                    <View style={styles.body}>
                        <Text style={styles.Text}>{item.name}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={styles.Text}>₹ {item.price}</Text>
                            <IconButton style={{marginTop: -3}}
                                icon="cart"
                                color="white"
                                size={20}
                                onPress={() => selectedItem(item.id, item.name, item.imageURL, item.price)}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, margin: 40, marginHorizontal: 20, marginBottom: 0, marginTop: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Avatar.Image style={styles.Avatar} size={44} source={require('../../../assets/shopping-online.jpg')} />
                <View style={styles.button}>
                    <IconButton style={{}}
                        icon="cart"
                        color="white"
                        size={20}
                        onPress={() => navigation.navigate('Cart')}
                    />
                    <Text style={{ color: 'white', marginTop: 10 }}>{count}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}><Text style={{ marginTop: 10, paddingLeft: 10, color: 'white', paddingRight: 15 }}>View Cart</Text></TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={category_data}
                renderItem={({ item }) => {
                    return fetch_data(item)
                }}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cards: {
        marginBottom: 20,
        backgroundColor: 'black'
    },
    Text: {
        fontSize: 15,
        color: 'white'
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        marginBottom: 10,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        marginBottom: 10,
        color: 'white',
        borderRadius: 15
    },
    Avatar: {
        marginBottom: 10
    }
})
const mapStateToProps = (state) => {
    return {
        category_data: state.category_data,
        count: state.count
    }
}

export default connect(mapStateToProps, { category, selectedItem })(Men);
