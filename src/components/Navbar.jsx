import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useAppSelector } from "../redux/hooks";
import AuthPage from "./AuthPage";

const Navbar = ({ setShowCart }) => {
  const [menu, setMenu] = useState(false);
  const [showAuthPage, setShowAuthPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openAuthPage = () => {
    setShowAuthPage(true);
  };

  const closeAuthPage = () => {
    setShowAuthPage(false);
  };

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
    closeAuthPage();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <header className="fixed w-full z-10">
      <section>
        {/* Desktop Menu Section */}
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold text-white cursor-pointer">
                FashionNest
              </h1>
            </Link>
          </div>

          {/* Desktop Nav Elements */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-semibold gap-8 text-DarkColor">
            {["home", "shop", "Exclusive Products", "New Arrivals", "review"].map((section, index) => (
              <Link
                key={index}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Icons Section */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <FaUser
                size={25}
                onClick={openAuthPage}
                className="cursor-pointer text-DarkColor"
              />
              {isLoggedIn ? (
                <>
                  <span className="text-sm font-medium text-white">
                    {username}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-blue-500 underline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                showAuthPage && <AuthPage onClose={closeAuthPage} onLogin={handleLogin} />
              )}
            </div>
            <div className="text-DarkColor relative">
              <FaShoppingCart
                size={25}
                className="cursor-pointer hover:text-white"
                onClick={() => setShowCart(true)}
              />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden md:hidden flex items-center">
            {menu ? (
              <IoClose
                size={28}
                onClick={handleChange}
                className="cursor-pointer text-white"
              />
            ) : (
              <MdOutlineMenu
                size={28}
                onClick={handleChange}
                className="cursor-pointer text-white"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Section */}
        <div
          className={`${menu ? "translate-x-0" : "translate-x-full"
            } lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {["home", "shop", "Exclusive Products", "New Arrivals", "review"].map(
            (section, index) => (
              <Link
                key={index}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer"
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )
          )}
        </div>
      </section>
    </header>
  );
};

export default Navbar;
