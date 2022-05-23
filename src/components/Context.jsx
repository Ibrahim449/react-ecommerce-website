import React, { useContext, useReducer } from 'react'
import Data from './Data'
import { productsData } from './products/productsData'
import reducer from './reducer'


const AppContext = React.createContext()

const initialState = {
    cart: productsData,
    total: 0,
    amount: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    const removeBtn = (id) => {
        dispatch({type: 'REMOVE_BTN', payload: id})
    }

    return (
    <AppContext.Provider 
        value={{ ...state, clearCart, removeBtn }}>
        {children}
    </AppContext.Provider>
    )
}

// custom hook
 export const useGlobalContext = () => {
     return useContext(AppContext);
 }

export {AppContext, AppProvider}