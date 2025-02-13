import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, product) => {
        return total + parseFloat(product.price);
    }, 0).toFixed(2);

    return (
        <section className="bg-black text-white py-20 px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="text-lg text-gray-400">Your cart is empty.</p>
            ) : (
                <div className="max-w-4xl mx-auto">
                    {cart.map((product, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <img src={product.image} alt={product.title} className="w-16 h-16 rounded-md mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                    <p className="text-gray-300">{product.price}</p>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3 className="text-2xl font-bold text-white mt-6">Total Price: ${totalPrice}</h3>
                    <button onClick={clearCart} className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
                        Clear Cart
                    </button>
                </div>
            )}
            <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                Back to Home
            </button>
        </section>
    );
}