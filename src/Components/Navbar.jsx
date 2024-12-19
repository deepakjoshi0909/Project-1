import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <NavLink to="/" className="hover:text-yellow-300">
            My Blog
          </NavLink>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-300'
              }
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/authors"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-300'
              }
            >
              Authors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-300'
              }
            >
              About
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    isActive ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-300'
                  }
                >
                  Create Post
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 shadow-md"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-300'
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-300'
                  }
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl focus:outline-none text-yellow-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 p-6 space-y-6 text-center shadow-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
              exact
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/authors"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
              onClick={() => setMenuOpen(false)}
            >
              Authors
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Create Post
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 w-full text-left shadow-md"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
