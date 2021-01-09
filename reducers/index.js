import {
    CATEGORY_RESPONSE,
    CATEGORY_DATA,
    SELECTED_ITEM,
    INCREMENT, 
    DECREMENT,
    RESET,
    PRICE,
    GST,
    TOTAL
} from '../actions/type';


const intialState = {
    category_response: null,
    category_data: [],
    selected_item:[],
    total: 0,
    counter: 1,
    gst: 0,
    // full_total:0
}


export default function reducer(state = intialState, action){
    const { type, payload } = action;
    switch(type){
        case CATEGORY_RESPONSE:{
            return{
                ...state,
                category_response: payload
            }
        }
        case CATEGORY_DATA:{
            return{
                ...state,
                counter: 1,
                category_data: payload
            }
        }
        case SELECTED_ITEM:{
            return{
                ...state,
                ...payload,
                counter: 1,
                selected_item: payload
            }
        }
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1,
                total: state.total + payload,
                // full_total: state.full_total + state.total
            }
        }
        case DECREMENT: {
            return{
                ...state,
                counter: state.counter - 1,
                total: state.total - payload,
                // full_total: (state.total - payload)+state.gst
            }
        }
        case GST:{
            return {
                ...state,
                gst: payload
            }
        }
        case PRICE:{
            return {
                ...state,
                total: payload,
            }
        }
        case RESET:{
            return {
                ...state,
                counter: 1
            }
        }
        case TOTAL:{
            return {
                ...state,
                full_total: payload
            }
        }
        default :{
            return state
        }
    }
}

// export default function reducer(state = intialState, action) {
//     const { type, payload } = action;
//     console.log(payload)
//     switch (type) {
//         case CATEGORY_RESPONSE: {
//             return {
//                 ...state,
//                 category_response: payload
//             }
//         }
//         case CATEGORY_DATA: {
//             return{
//                 ...state,
//                 category_data: payload
//             }
//         }
//         case SELECTED_ITEM:{
//             return {
//                 ...state,
//                 count: state.count + 1,
//                 selected_item: payload
//             }
//         }
//         default:{
//             return state
//         }
//     }
// }