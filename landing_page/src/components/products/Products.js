

export default function Products({ show }) {
    const products = [
        { title: "Analog Synth A1", description: "Rich, warm analog tones for classic synth sounds.", image: "/images/products/product1.webp" },
        { title: "Digital Synth D2", description: "Cutting-edge digital synthesis with endless possibilities.", image: "/images/products/product2.webp" },
        { title: "Modular System M3", description: "A fully modular synthesizer for ultimate customization.", image: "/images/products/product3.webp" }
    ];

    return (
        <section className={`bg-black text-white py-20 px-4 transition-all duration-[1500ms] ease-in-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id="products">
            <h2 className="text-3xl font-bold text-center mb-10">Our Synthesizers</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
                        <p className="mt-2 text-gray-300">{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}