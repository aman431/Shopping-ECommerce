import {
    CATEGORY_RESPONSE,
    CATEGORY_DATA,
    SELECTED_ITEM,
    INCREMENT,
    DECREMENT,
    RESET,
    PRICE,
    GST,
    // TOTAL
} from './type';
import axios from 'axios';

export const category = () => async(dispatch) => {
    try{
        const category_data = await axios('https://next.json-generator.com/api/json/get/4kBVim32Y');
        const data_array = category_data.data.data;
        dispatch({
            type: CATEGORY_RESPONSE,
            payload: category_data
        });
        dispatch({
            type: CATEGORY_DATA,
            payload: data_array
        })
    }
    catch(err){
        console.log(err)
    }
}

export const selectedItem = (name,image, price, desc) => async(dispatch) => {
    try{
        const response = [{name, image, price, desc}];
        const price1 = price;

        const gst = (5/100)*price1;
        const total = price1 + gst;
        // console.log(response);

        dispatch({
            type:SELECTED_ITEM,
            payload: response
        })
        // dispatch({
        //     type: TOTAL,
        //     payload: total
        // })
        console.log(price1)
        dispatch({
            type: PRICE,
            payload: price1
        })

        dispatch({
            type: GST,
            payload: gst
        })
        // dispatch({
        //     type: TOTAL,
        //     payload: total
        // })
    }
    catch(error){
        console.log(error);
    }
}

export const Increment = (price) => (dispatch) => {
    try{
        dispatch({
            type: INCREMENT,
            payload: price
        })  
    } 
    catch(error){
        console.log(error);
    }
}

export const Decrement = (price) => (dispatch) => {
    try{
        dispatch({
            type: DECREMENT,
            payload: price
        })
    } 
    catch(error){
        console.log(error);
    }
}

export const Reset = () => (dispatch) => {
    console.log("RESET CALL");
    dispatch({
        type: RESET
    })
}

export const Calculate_Gst = () => async(dispatch) => {
    console.log("hello running gst");
}