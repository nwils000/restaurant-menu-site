import { useContext, useState, useEffect } from 'react';
import { GlobalCartData } from '../main';
import '../styles/Cart.css';

export default function Cart() {
  const { cartData, handleCheckout } = useContext(GlobalCartData);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cartData.items.forEach((item) => {
      newTotal += parseFloat(item.price);
    });
    setTotalPrice(newTotal);
  }, [cartData]);

  return (
    <>
      <h1>Your Cart</h1>
      {cartData.items.map((item, index) => (
        <div className="cart-item" key={item.name + index}>
          <form>
            <div>
              <span>Item Name: {item.name}</span>
            </div>
            <div>
              <span>Price: ${item.price}</span>
            </div>
          </form>
        </div>
      ))}
      <p>Total Price: {totalPrice}</p>
      <button onClick={handleCheckout} type="submit">
        Proceed to Checkout
      </button>
    </>
  );
}
