import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const [isActive, setActive] = useState(true);
  const navRef = useRef();
  const handleSideBar = () => {
    setActive(!isActive);
    if (isActive) {
      navRef.current.style.left = 0;
    } else {
      navRef.current.style.left = "-300px";
    }
  };

  return (
    <>
      <div className="navbar max-w-7xl mx-auto font-open-sans">
        <div className="flex-1 gap-2">
          <div className="text-[20px] lg:hidden cursor-pointer">
            <FaBars onClick={handleSideBar}></FaBars>
          </div>
          <a className="text-2xl md:text-3xl  font-bold">
            Product<span className="text-pink-500">Hero</span>
          </a>
        </div>

        <div className="flex-1 justify-end gap-16 *:flex  *:items-center *:gap-10">
          <div>
            <ul className="hidden items-center gap-6 *:text-paragraph font-semibold lg:flex">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/create-product"
                >
                  Create Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-16 rounded-full">
                    <img alt="" src="" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 font-open-sans *:bgHover *:py-1 *:text-paragraph *:text-[23px]"
                >
                  <li>
                    <Link>Setting</Link>
                  </li>

                  <li>
                    <Link>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/login"
              >
                <button className="font-open-sans   duration-500 button">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className="fixed lg:hidden -left-[300px] top-0 bottom-0 w-[250px] bg-darkRed  z-50 duration-500 font-open-sans bg-[#040814]"
      >
        <div className="flex justify-between border-b border-dashed py-6 px-2">
          <a className="text-2xl md:text-3xl  font-bold text-white">
            Product<span className="text-bgColor">Hero</span>
          </a>
          <IoClose
            onClick={handleSideBar}
            className="text-[34px]  cursor-pointer text-white"
          ></IoClose>
        </div>
        <ul className="items-center gap-4 font-inter text-white p-4">
          <li>
            <NavLink
              onClick={handleSideBar}
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleSideBar}
              to="/create-product"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              Create Product
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleSideBar}
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleSideBar}
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
