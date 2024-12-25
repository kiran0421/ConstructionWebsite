// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
function Navbar() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.setItem("auth", false);
    navigate("/login");
  };
  return (
    <nav
      className={` z-10 flex justify-center items-center w-1/4 flex-row p-4 ${styles.navbar}`}
    >
      {/* Menu */}
      <ul className="flex space-x-6 text-white">
        <li>
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-yellow-400 transition-all"
          >
            About Us
          </Link>
        </li>

        {/* Services Menu with Submenus */}
        <li className="relative group">
          <span className="cursor-pointer text-white hover:text-yellow-400 transition-all">
            Services
          </span>

          {/* Services Submenu */}
          <ul className="absolute hidden group-hover:block text-white mt-2 p-2 rounded w-48 shadow-lg">
            <li>
              <Link
                to="/services/group-houses"
                className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
              >
                Group Houses
              </Link>
            </li>

            {/* Independent Houses Submenu */}
            <li className="relative group">
              <Link
                to="/services/independent-houses"
                className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
              >
                Independent Houses
              </Link>
              {/* Independent Houses Submenu shown only on hover of Independent Houses */}
              <ul className="absolute hidden group-hover:block bg-blue-600 text-white mt-2 p-2 rounded w-48 shadow-lg">
                <li>
                  <Link
                    to="/services/independent-houses/g"
                    className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
                  >
                    G
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/independent-houses/g+1"
                    className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
                  >
                    G+1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/independent-houses/g+2"
                    className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
                  >
                    G+2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/independent-houses/g+3"
                    className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
                  >
                    G+3
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/services/villas"
                className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
              >
                Villas
              </Link>
            </li>
            <li>
              <Link
                to="/services/apartments"
                className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
              >
                Apartments
              </Link>
            </li>
            <li>
              <Link
                to="/services/gated-communities"
                className="block p-2 text-white hover:bg-blue-400 rounded transition-all"
              >
                Gated Communities
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/contact"
            className=" text-white hover:text-yellow-400 transition-all"
          >
            Contact Us
          </Link>
        </li>
        {/* <li>
          <a
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={Logout}
          >
            Logout
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
