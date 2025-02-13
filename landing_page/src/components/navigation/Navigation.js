import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="padding-1em">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="relative font-medium hover:text-blue-400 transition-all duration-300"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 transition-transform origin-left duration-300 hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="relative font-medium hover:text-blue-400 transition-all duration-300"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 transition-transform origin-left duration-300 hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="relative font-medium hover:text-blue-400 transition-all duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 transition-transform origin-left duration-300 hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
