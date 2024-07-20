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

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart)
    //  the Method used in Map to delete an item base on id
    newCart.delete(action.payload.id)

    return { ...state, cart: new Map(newCart) }
  }

  throw new Error(`no matching action type "${action.type}"`)
}

export default reducer
