import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Button, Avatar } from 'react-native-paper'
import { connect } from 'react-redux';

const Cart = ({ selected_item }) =>{
    const Items = (item) => {
        return (
            <View style={{ flex: 1, margin: 40, marginHorizontal: 20, marginBottom: 0, marginTop: 10 }}>
                <Card key={item.id} style={styles.cards} >
                    <Card.Cover source={{ uri: item.image }} />
                    <View style={styles.body}>
                        <Text style={styles.Text}>{item.name}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={styles.Text}>₹ {item.price}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={selected_item}
                renderItem={({ item }) => {
                    return Items( item)
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
        selected_item: state.selected_item,
    }
}

export default connect(mapStateToProps, null)(Cart);