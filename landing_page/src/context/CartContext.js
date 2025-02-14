import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                return [...state.slice(0, index), ...state.slice(index + 1)];
            }
            return state;
        case 'CLEAR':
            return [];
        default:
            return state;
    }
}

export function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (product) => {
        dispatch({ type: 'ADD', payload: product });
        alert("You've successfully added product to your cart!");
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE', payload: productId });
        alert("Product deleted");
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR' });
        alert("Cart cleared");
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
