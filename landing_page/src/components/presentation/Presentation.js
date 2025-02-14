


export default function Presentation() {

    const images = [
        '/images/tech1.webp',
        '/images/tech2.webp',
        '/images/tech3.webp'
    ]

    return (
        <section className="bg-gray-900 text-white py-20 px-4 text-center" id='presentation'>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center mb-10">
                <img src={ images[0] } alt="Company" className="w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6" />
                <p className="text-lg text-gray-300">
                    We are a leading synthesizer manufacturer dedicated to crafting high-quality analog and digital instruments for musicians worldwide. Our mission is to provide innovative sound solutions while maintaining a commitment to superior craftsmanship and cutting-edge technology.
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center mb-10">
                <img src={ images[1] } alt="Team" className="w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6" />
                <p className="text-lg text-gray-300">
                    Our team consists of experienced sound engineers, designers, and musicians who share a passion for electronic music and sound innovation.
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
                <img src={ images[2] } alt="Innovation" className="w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6" />
                <p className="text-lg text-gray-300">
                    We strive for innovation and excellence, constantly pushing the boundaries of what is possible in the world of synthesizers and electronic music production.
                </p>
            </div>
        </section>
    );
}