import { useNavigate, useParams } from 'react-router-dom';

import { data } from '../../data/synthesizers';

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productData = data;

    const product = productData[id];

    if (!product) {
        return <div className="text-white text-center py-20">Product not found</div>;
    }

    return (
        <section className="bg-black text-white py-20 px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{product.title}</h2>
            <img src={product.image} alt={product.title} className="w-1/2 mx-auto rounded-lg shadow-lg" />
            <p className="mt-6 text-lg text-gray-300">{product.description}</p>
            <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                Back to Home
            </button>
        </section>
    );
}