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

  if (action.type === INCREASE_AMOUNT) {
    //1. Create a new Map Items
    const newCart = new Map(state.cart)

    //2. Get item ID
    const itemId = action.payload.id

    // 3. Get the particular  Item needed using it's ID
    const item = newCart.get(itemId)

    //4. Spread the selected Items out, update the amount value, and store it in a newItem variable
    const newItem = { ...item, amount: item.amount + 1 }

    // 5. Update the new Cart with the changes done using Set
    newCart.set(itemId, newItem)

    //6. Update global cart with newCart
    return { ...state, cart: newCart }
  }

  throw new Error(`no matching action type "${action.type}"`)
}

export default reducer
