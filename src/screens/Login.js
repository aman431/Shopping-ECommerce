import { Provider, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

function Login({ jumpTo, navigation }) {


    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState();
    const [age, setAge] = useState('');

    const genderList = [
        { label: 'Male', value: 'male', colors: "black" },
        { label: 'Female', value: 'female' },
    ];

    // const pressHanlder = () => {
    //     if (age > 18 && gender === "male") {
    //         jumpTo('home')
    //     } else if (age > 18 && gender === "female") {
    //         jumpTo('cart')
    //     }
    //     else {
    //         jumpTo('home')
    //     }
    // }

    const pressHanlder = () => {
        if (age > 18 && gender === "male") {
            navigation.navigate('Men')
        } else if (age > 18 && gender === "female") {
            navigation.navigate('Women')
        }
        else {
            navigation.navigate('Kid')
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginTop: 40, marginLeft: 10, marginRight: 10 }}>
            <Provider>
                <SafeAreaView >
                    <DropDown
                        label={'Gender'}
                        mode={'outlined'}
                        value={gender}
                        setValue={setGender}
                        list={genderList}
                        theme={theme}
                        activeColor="black"
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => setShowDropDown(false)}
                        inputProps={{
                            right: <TextInput.Icon name={'menu-down'} />,
                        }}
                    />

                    <TextInput
                        label="Phone Number"
                        mode="outlined"
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label="Age"
                        mode="outlined"
                        keyboardType="number-pad"
                        onChangeText={(text) => setAge(text)}
                    />

                    <Button
                        style={{ marginTop: 10 }}
                        icon="login"
                        mode="contained"
                        onPress={pressHanlder}>
                        Sign in
                    </Button>
                </SafeAreaView>
            </Provider>
        </View>
    );
}
const theme = {
    colors: {
        primary: 'black'
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#330066',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15
    },
    DropDown: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
});

export default Login;
