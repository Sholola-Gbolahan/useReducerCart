import React, { createContext, useContext, useReducer, useState } from "react"
import reducer from "./reducer"

import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions"


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const initialState = {
  isLoading: false,
  cart: [],
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export default AppProvider
