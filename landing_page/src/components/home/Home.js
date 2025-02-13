import Navigation from '../navigation/Navigation';
import Hero from '../hero/Hero';

export default function Home() {
    return (
        <section className="p-8 text-center">
            <h2 className="text-2xl font-semibold">Welcome to the digital revolution!</h2>
            <p className="mt-2 text-gray-600">Your all-in-one solution for great experiences.</p>
            <Navigation />
            <Hero />
        </section>
    )
}