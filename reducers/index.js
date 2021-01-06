import {
    CATEGORY_RESPONSE,
    CATEGORY_DATA,
    SELECTED_ITEM
} from '../actions/type';


const intialState = {
    category_response: null,
    category_data: [],
    selected_item:[],
    count: 0
}

export default function reducer(state = intialState, action) {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case CATEGORY_RESPONSE: {
            return {
                ...state,
                category_response: payload
            }
        }
        case CATEGORY_DATA: {
            return{
                ...state,
                category_data: payload
            }
        }
        case SELECTED_ITEM:{
            return {
                ...state,
                count: state.count + 1,
                selected_item: payload
            }
        }
        default:{
            return state
        }
    }
}