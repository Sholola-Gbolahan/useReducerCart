import React, { createContext, useContext, useReducer, useState } from "react"
import reducer from "./reducer"
import items from "./data"

import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions"
import cartItems from "./data"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const clearCart = () => {
    return dispatch({ type: CLEAR_CART })
  }

  const removeItem = (id) => {
    return dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const increase = (id) => {
    return dispatch({ type: INCREASE_AMOUNT, payload: { id } })
  }

  //1. Create function to dispatch action
  const decrease = (id) => {
    return dispatch({ type: DECREASE_AMOUNT, payload: { id } })
  }

  return (
    <AppContext.Provider
      //2. Pass the function down to be used globally
      value={{ ...state, clearCart, removeItem, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
