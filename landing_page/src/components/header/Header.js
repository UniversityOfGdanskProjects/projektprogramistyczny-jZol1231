import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function Header() {

  const { cart } = useCart();

  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <Link to='/'><h1 className="text-xl font-bold">POWERFUL DIGITAL SYNTHESIS</h1></Link>
      <div>
                <button className="mt-6 px-3 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition">
                  <Link to='/cart'>🛒 Cart: {cart.length} items </Link>
                </button>
            </div>
    </header>
  );
}
