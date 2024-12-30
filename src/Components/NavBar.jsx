import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route location

  const Logout = () => {
    localStorage.setItem("auth", false);
    navigate("/login");
  };

  // Check if the current route is `/services` or any subroute
  const isInServices = location.pathname.startsWith("/services");

  // Check if the current route is `/contact`
  const isInContact = location.pathname.startsWith("/contact");

  return (
    <nav
      className={`z-10 flex justify-center items-center w-1/4 flex-row p-4 ${styles.navbar}`}
    >
      {/* Menu */}
      <ul className="flex space-x-6 text-white">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-yellow-400 transition-all ${
                isActive ? "underline" : ""
              } ${
                isInContact
                  ? "text-green-500"
                  : isInServices
                  ? "text-black"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white hover:text-yellow-400 transition-all ${
                isActive ? "underline" : ""
              } ${
                isInContact
                  ? "text-green-500"
                  : isInServices
                  ? "text-black"
                  : ""
              }
              `
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-white hover:text-yellow-400 transition-all ${
                isActive ? "underline" : ""
              }  ${
                isInContact
                  ? "text-green-500"
                  : isInServices
                  ? "text-black"
                  : ""
              }`
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white hover:text-yellow-400 transition-all ${
                isActive ? "underline" : ""
              } ${
                isInContact
                  ? "text-green-500"
                  : isInServices
                  ? "text-black"
                  : ""
              }`
            }
          >
            Contact Us
          </NavLink>
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
