import {
    CATEGORY_RESPONSE,
    CATEGORY_DATA,
    SELECTED_ITEM
} from './type';
import axios from 'axios';

export const category = (category_type) => async (dispatch) => {
    console.log("working")
    try {
        const category_data = await axios(`http://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=${category_type}%27s-fashion`);
        const category_array = category_data.data.data;
        // console.log(category_array) 
        // console.log(category_data.data.data);
        // console.log(data.data.data)

        dispatch({
            type: CATEGORY_RESPONSE,
            payload: category_data
        });
        dispatch({
            type: CATEGORY_DATA,
            payload: category_array
        })

    } catch (error) {
        console.log(error)
    }
}

export const selectedItem = (id,name,image, price) => async(dispatch) => {
    try{
        const response = [{id,name, image, price}];
        console.log(response)
        dispatch({
            type:SELECTED_ITEM,
            payload: response
        })
    }
    catch(error){
        console.log(error);
    }
}