import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function Header() {

  const { cart } = useCart();

  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">First Synthesizer for the Future and Beyond</h1>
      <div>
                <Link to='/cart'>🛒 Cart: {cart.length} items </Link>
            </div>
    </header>
  );
}
