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
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="relative font-medium hover:text-blue-400 transition-all duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="relative font-medium hover:text-blue-400 transition-all duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
