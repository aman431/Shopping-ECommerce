import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Title, Button} from 'react-native-paper';
import { connect } from 'react-redux'
import {selectedItem} from '../../actions/index'
const Product = (props) => {

    const { id, name, image, price, describe, desc} = props.route.params.item;
    return (
        <View style={styles.root}>
            <View>
                <Image
                    style={{ width: "95%", height: 300, marginLeft: 8, marginTop: 10 }}
                    source={{ uri: image }}
                />
            </View>
            <View style={styles.header}>
                <Text style={{fontSize: 30, marginLeft: 10}}>{name}</Text>
                <Text style={{marginRight:55, marginTop: 15, fontSize:15,fontWeight: "normal"}}>Rs {price}.00</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.textStyle}>{desc}</Text>
            </View>
            <View style={styles.Button}>
                <View></View>
                <View>
                <Button
                    style={styles.InputStyle}
                    mode="contained"
                    onPress={() => {
                        if(props.selectedItem(name, image, price, desc)){
                            return props.navigation.navigate('cart')
                        }
                    }}>
                    Add To Cart
                </Button>
                    <Text style={{fontSize:20, marginTop: 5, marginBottom: 5, marginLeft: "50%"}}>or</Text>
                    <Button
                    style={styles.InputStyle}
                    mode="contained"
                    onPress={() => props.navigation.navigate('cart')}>
                    Already added
                </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        margin: 10
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 10
    },
    description:{
        marginTop: 20,
        marginLeft: 8,
        display:'flex',
    },
    textStyle:{
        fontSize: 15,
        fontWeight: "normal"
    },
    Button:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }
})
export default connect(null, {selectedItem})(Product);