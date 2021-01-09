import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { Button, Card, IconButton } from 'react-native-paper';
import { Increment, Decrement, selectedItem, Calculate_Gst} from '../../actions/index';
import { connect } from 'react-redux';

const Cart = ({ selected_item, Increment, Decrement, counter, total, gst, Calculate_Gst, full_total }) => {
    // console.log(total);
    // console.log("Gst", gst);
    const Item = selected_item.map((item) => {
        // console.log(counter)
        // console.log(total)
        // console.log("full_total",full_total)
        
        return (
            <View style={{ flex: 1 }}>
                <Card style={styles.mycard}>
                    <View style={styles.cardview}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ width: 60, height: 60, borderRadius: 30 }}
                                source={{ uri: item.image }}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.Text}>{item.name}</Text>
                                <Text>Rs {total <= 0 ? item.price : total}.00</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <IconButton
                                icon="plus"
                                color="black"
                                size={20}
                                onPress={() => {Increment(item.price)}}
                            />
                            <Text style={{ marginTop: 10 }}>{counter < 0 ? "0": counter}</Text>
                            <IconButton
                                icon="minus"
                                color="black"
                                size={20}
                                onPress={() => Decrement(item.price)}
                            />
                        </View>
                    </View>
                </Card >
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <View><Text></Text></View>
                    <View>
                        <Text style={styles.TextStyle1}>
                            Sub Total Rs {total <= 0 ? item.price : total}.00
                        </Text>
                        <Text style={styles.TextStyle2}>GST 5% Rs {gst}</Text>
                        <Text style={styles.TextStyle3}>Total Rs {counter <= 0 ? "0": total + gst}</Text>
                    </View>
                </View>
            </View>
        )
    })
    return (
        <View style={{ flex: 1 }}>
            {Item}
            {/* <FlatList
                data={selected_item}
                renderItem={({ item }) => {
                    return Item(item)
                }}
            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        padding: 5,
        borderRadius: 10
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
    InputStyle: {
        padding: 8,
        width: "50%",
        backgroundColor: '#50c5e6'
    },
    InputStyle1: {
        padding: 8,
        width: "50%",
        backgroundColor: 'lightgrey',
        color: 'black'
    },
    TextStyle1:{
        marginTop: 300, 
        marginRight:40, 
        fontWeight:'normal', 
        fontSize:20
    },
    TextStyle2:{
        marginRight:40, 
        fontWeight:'normal', 
        fontSize:20
    },
    TextStyle3:{
        marginRight:40, 
        fontWeight:'normal', 
        fontSize:20,
        marginTop: 10
    }
})


const mapStateToProps = (state) => {
    return {
        selected_item: state.selected_item,
        counter: state.counter,
        total: state.total,
        gst: state.gst,
        full_total: state. full_total
    }
}

export default connect(mapStateToProps, { Increment, Decrement, Calculate_Gst })(Cart);