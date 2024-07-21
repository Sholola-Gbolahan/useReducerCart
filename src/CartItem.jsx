import { FaChevronUp, FaChevronDown } from "react-icons/fa"

import { useAppContext } from "./context"
const CartItem = ({ id, img, title, price, amount }) => {
  const { increase, removeItem, decrease } = useAppContext()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() =>
            //4. Apply function to where needed
            decrease(id)
          }
        >
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  )
}

export default CartItem
