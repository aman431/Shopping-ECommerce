import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, IconButton, FAB, Button } from 'react-native-paper';
import {category, selectedItem, Reset} from '../../actions/index'
import { connect } from 'react-redux';
const Home = ({ navigation, category, category_data, selectedItem, Reset }) => {

    useEffect(() => {
        category()
    },[category])

    console.log(category_data);

    const Item = (item) => {
        return (
            <Card style={styles.mycard} onPress={() => navigation.navigate("Product", { item })}>
                <View style={styles.cardview}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 30 }}
                            source={{ uri: item.image }}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.Text}>{item.name}</Text>
                            <Text>Rs {item.price}.00</Text>
                        </View>
                    </View>
                    <View>
                        <IconButton
                            icon="cart"
                            color="black"
                            size={20}
                            onPress={() => {
                                if(selectedItem(item.name, item.image, item.price, item.desc)){
                                    return Reset()
                                }
                            }}
                        />
                    </View>
                </View>
            </Card >
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={category_data}
                renderItem={({ item }) => {
                    return Item(item)
                }}
                keyExtractor={item => item.id}


            />
            <View style={styles.Button}>
            <Button
                    style={styles.InputStyle}
                    mode="contained"
                    onPress={() => navigation.navigate("CliffexCart")}>
                    Product
            </Button>
            <Button
                    style={styles.InputStyle1}
                    mode="contained"
                    onPress={() => navigation.navigate("cart")}>
                    <Text style={{color:'black'}}>Cart</Text>
            </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        padding: 5,
        borderRadius:10
    },
    cardview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
    },
    Text: {
        fontSize: 20,
        flexDirection: 'column'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    Button: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    InputStyle:{
        padding: 8,
        width: "50%",
        backgroundColor:'#50c5e6'
    },
    InputStyle1:{
        padding: 8,
        width: "50%",
        backgroundColor:'lightgrey',
        color: 'black'
    }
})
const mapStateToProps = (state) => {
    return {
        category_data: state.category_data
    }
}

export default connect(mapStateToProps, {category, selectedItem, Reset})(Home);
