import React from 'react';

const products = [
  { id: 1, name: 'Sản phẩm A', price: 100 },
  { id: 2, name: 'Sản phẩm B', price: 200 },
  { id: 3, name: 'Sản phẩm C', price: 300 }
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} VND
            <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
