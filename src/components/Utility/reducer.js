import {Type} from '/action.type'

const intialState = {
    basket = [];
}

export const reducer = (state, action) => {
    switch (type.action) {
        case Type.ADD_TO_BASKET:
            return{
                ...state, 
                basket:[...state.basket, action.item],
            }
    
        default:
            return state;
    }

}