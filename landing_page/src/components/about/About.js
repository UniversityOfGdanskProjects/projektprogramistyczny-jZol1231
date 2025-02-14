
export default function About() {
    return (
        <section className="p-8 text-center">
            <h2 className="text-4xl font-semibold">About Us</h2>
            <p className="mt-2 text-gray-400 p-5">Learn more about our mission and values.</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Our company is dedicated to creating high-quality synthesizers that redefine sound production. We are passionate about innovation and strive to provide musicians with cutting-edge technology to inspire creativity.
            </p>
            <div className="mt-10 max-w-6xl mx-auto flex flex-col gap-8">
                {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
                {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <img src="/images/pat.png" alt="Founder" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold">Pat</h3>
                    <p className="text-gray-300 mt-2">Founder & CEO</p>
                    <p className="text-gray-300 mt-1">Loves everything that makes sound. Always trying to push forward and innovate.</p>
                </div> */}
                {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <img src="/images/mat.png" alt="pat" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold">Mat</h3>
                    <p className="text-gray-300 mt-2">Lead Sound Engineer</p>
                </div> */}
                <div className={'items-center gap-6 p-6'}>
                    <img src='/images/mat.png' alt='mat' className="h-64 object-cover rounded-lg shadow-lg" />
                    <div className=" text-left">
                        <h3 className="text-2xl font-semibold">Mat</h3>
                        <p className="text-gray-300">Founder & CEO</p>
                        <p className="text-gray-300">Loves everything that makes sound. Always trying to push forward and innovate.</p>
                    </div>
                </div>
                <div className={'items-center gap-6 p-6'}>
                    <img src='/images/pat.png' alt='pat' className=" h-64 object-cover rounded-lg shadow-lg" />
                    <div className=" text-left">
                        <h3 className="text-2xl font-semibold">Pat</h3>
                        <p className="text-gray-300">Lead Sound Engineer</p>
                        <p className="text-gray-300">Ambitious and passionate about analog synthesis. Always looking for improvements. Says that some day he will make a synth that's gonna change the world.</p>
                    </div>
                </div>
                {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <img src="/images/designer.jpg" alt="Designer" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold">Michael Brown</h3>
                    <p className="text-gray-300 mt-2">Product Designer</p>
                </div> */}
                {/* </div> */}
            </div>
            
            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <iframe
                    title="map"
                    className="w-full max-w-4xl h-80 mx-auto rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.7836977978527!2d18.571745276966393!3d54.39613547261232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd752f76dddae7%3A0x4d4128c9a5066e47!2sUniwersytet%20Gda%C5%84ski!5e0!3m2!1spl!2spl!4v1739503953344!5m2!1spl!2spl"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}