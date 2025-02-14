import { useRef, useMemo, useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

    // useEffect(() => {
    //     console.log("footer done");
    // }, []);

    const footerLinks = useMemo(() => [
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Terms of Service" },
        { href: "#", text: "Contact" }
    ], []);

    return (
        <footer className="bg-gray-900 text-white py-10 px-4 text-center">
            <p className="text-lg">&copy; 2025 Synth Company. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
                {footerLinks.map((link, index) => (
                    <a key={ index } href={ link.href } target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        { link.text }
                    </a>
                ))}
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