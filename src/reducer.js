import React from "react"
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions"

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }

  throw new Error(`no matching action type "${action.type}"`)
  return state
}

export default reducer
