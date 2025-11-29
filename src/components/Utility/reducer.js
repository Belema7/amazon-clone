import { Type } from './action.type'

export const initialState = {
    basket: [],
    user: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            // Check if item already exists in basket
            const existingItemIndex = state.basket.findIndex(item => item.id === action.item.id);
            if (existingItemIndex >= 0) {
                // Item exists, increase quantity
                const updatedBasket = state.basket.map((item, index) => 
                    index === existingItemIndex 
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
                return {
                    ...state,
                    basket: updatedBasket
                };
            }
            // Item doesn't exist, add it with quantity 1
            return {
                ...state,
                basket: [...state.basket, { ...action.item, quantity: 1 }],
            };

        case Type.REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            };

        case Type.INCREASE_QUANTITY:
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            };

        case Type.DECREASE_QUANTITY:
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.id
                        ? { 
                            ...item, 
                            quantity: Math.max(1, (item.quantity || 1) - 1) // Minimum quantity is 1
                          }
                        : item
                )
            };
        case Type.SET_USER: 
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}