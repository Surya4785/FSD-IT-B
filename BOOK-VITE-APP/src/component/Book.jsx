import React, { useState } from 'react';
import './book.css';

const booksData = [
  {
    id: 1,
    title: "Physics",
    price: 462,
    image: "data:image/jpeg;base64,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", 
  },
  {
    id: 2,
    title: "Chemistry",
    price: 399,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLvaZHaXYZPXV9FSdyrV9T0I50FoxjCaFBQ5XTU5auhr5ummMDUcN0ZSOumwCde6y5KqA0L3SjWb1F2O6mO8u8HpXY8P2BLoYOdx-Y8Fsgw&s=10"
  },
  {
    id: 3,
    title: "Mathematics",
    price: 499,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRw3L6YngZtazVEsMm-dBXTKRVVskYmSPZlChQGy4t8rKIdCNVdmqRuSwkJ3fKFVmx1IPRxLmIWcsdtirQkHxhlLt5qPJw9JhfVMBwdfqZvGvA09VZwua8M"
  }
];

const Book = ({ title, price, image }) => {
  const [count, setCount] = useState(1); // 👈 initialize quantity

  const addToCart = () => {
    alert(`Book ${title} ${count} added to cart!`);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className='card'>
      <img src={image} alt={title} width={200} height={200} />
      <h3>Title: {title}</h3>
      <h4>Price: ${price}</h4>
      <div className="counter">
        <p>Quantity: {count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Book;
export { booksData };