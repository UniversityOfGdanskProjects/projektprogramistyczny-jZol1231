import Navigation from '../navigation/Navigation';
import Hero from '../hero/Hero';

export default function Home({ onExploreClick }) {
    return (
        <section className="p-8 text-center">
            <h1 className="text-4xl font-semibold ">Welcome to the digital revolution!</h1>
            <p className="mt-2 text-gray-400">Your all-in-one solution for great experiences.</p>
            <Navigation />
            <Hero onExploreClick={ onExploreClick } />

        </section>
    )
}