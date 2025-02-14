import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);

    const totalPrice = cart.reduce((total, product) => {
        return total + parseFloat(product.price);
    }, 0).toFixed(2);

    const handleFinalizeClick = () => {
        setShowForm(prev => !prev);
    }


    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            address: '',
            city: '',
            zipCode: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            address: Yup.string().required('Address is required'),
            city: Yup.string().required('City is required'),
            zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid ZIP code').required('ZIP Code is required')
        }),
        onSubmit: (values, { resetForm }) => {
            alert(`Thank you for your purchase, ${values.fullName}! Your order has been placed.`);
            clearCart();
            resetForm();
        }
    });




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
                                    <p className="text-gray-300">Price: {product.price}$</p>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3 className="text-2xl font-bold text-white mt-6">Total Price: ${totalPrice}</h3>
                    <button onClick={handleFinalizeClick} className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                        Finalize Purchase
                    </button>
                    {showForm && <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Checkout</h3>
                        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
                            <input type="text" name="fullName" placeholder="Full Name" {...formik.getFieldProps('fullName')} className="p-2 bg-gray-700 text-white rounded" />
                            {formik.touched.fullName && formik.errors.fullName ? <p className="text-red-500">{formik.errors.fullName}</p> : null}
                            
                            <input type="email" name="email" placeholder="Email" {...formik.getFieldProps('email')} className="p-2 bg-gray-700 text-white rounded" />
                            {formik.touched.email && formik.errors.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
                            
                            <input type="text" name="address" placeholder="Address" {...formik.getFieldProps('address')} className="p-2 bg-gray-700 text-white rounded" />
                            {formik.touched.address && formik.errors.address ? <p className="text-red-500">{formik.errors.address}</p> : null}
                            
                            <input type="text" name="city" placeholder="City" {...formik.getFieldProps('city')} className="p-2 bg-gray-700 text-white rounded" />
                            {formik.touched.city && formik.errors.city ? <p className="text-red-500">{formik.errors.city}</p> : null}
                            
                            <input type="text" name="zipCode" placeholder="ZIP Code" {...formik.getFieldProps('zipCode')} className="p-2 bg-gray-700 text-white rounded" />
                            {formik.touched.zipCode && formik.errors.zipCode ? <p className="text-red-500">{formik.errors.zipCode}</p> : null}
                            
                            <button type="submit" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                                Place Order
                            </button>
                        </form>
                    </div>}
                </div>
            )}
            <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                Back to Home
            </button>
        </section>
    );
}