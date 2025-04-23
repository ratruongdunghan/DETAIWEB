import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} : {item.price} VND
              <button onClick={() => removeFromCart(item)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
