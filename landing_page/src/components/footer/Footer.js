import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4 text-center">
            <p className="text-lg">&copy; 2025 Synth Company. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <Link to='#' className="hover:text-blue-400">Privacy Policy</Link>
                <Link to="#" className="hover:text-blue-400">Terms of Service</Link>
                <Link to="#" className="hover:text-blue-400">Contact</Link>
            </div>
            
            <div className="flex justify-center space-x-6 mt-6">
                <a href="https://www.facebook.com" className="text-white hover:text-blue-500 text-2xl" rel="noopener noreferrer" target="_blank">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com" className="text-white hover:text-pink-500 text-2xl" rel="noopener noreferrer" target="_blank">
                    <FaInstagram />
                </a>
                <a href="https://www.x.com" className="text-white hover:text-blue-400 text-2xl" rel="noopener noreferrer" target="_blank">
                    <FaXTwitter />
                </a>
            </div>
        </footer>
    );
}