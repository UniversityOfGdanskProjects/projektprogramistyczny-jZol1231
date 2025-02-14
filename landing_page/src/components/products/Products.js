import { Link } from "react-router-dom";
import { data } from '../../data/synthesizers';

export default function Products({ show, onClickShowPres }) {

    const products = data;

    return (
        <section className={`bg-black text-white py-20 px-4 transition-all duration-[1500ms] ease-in-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id="products">
            <h2 className="text-3xl font-bold text-center mb-10">Our Synthesizers</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <Link to={`/product/${product.id}`} key={index}>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
                            <p className="mt-2 text-gray-300">{product.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={onClickShowPres} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                    ↓ Show More
                </button>
            </div>
        </section>
    );
}