import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState();

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex-Container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src="./img/logo.svg" alt="" />
        </div>
        {/* menu-items */}
        {/* medium screens or less will hide the menu-items */}
        <div className="hidden md:flex space-x-6">
          <a
            href=""
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Pricing
          </a>
          <a
            href=""
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Product
          </a>
          <a
            href=""
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            About Us
          </a>
          <a
            href=""
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Carrers
          </a>
          <a
            href=""
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Community
          </a>
        </div>

        <a
          href=""
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition delay-150"
        >
          Get Started
        </a>

        {/* Hamburguer Icon */}
        <button
          id="menu-btn"
          className={`block ${
            hamburger ? "open" : ""
          } hamburger md:hidden focus:outline-none`}
          onClick={() => setHamburger(!hamburger)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* mobile menu */}
      </div>
      <div className=" md:hidden">
        <div
          className={`absolute flex flex-col items-center ${
            hamburger ? "" : "hidden"
          } self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a
            href="#"
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Pricing
          </a>
          <a
            href="#"
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Product
          </a>
          <a
            href="#"
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            About Us
          </a>
          <a
            href="#"
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Careers
          </a>
          <a
            href="#"
            className="transition delay-150 hover:text-darkGrayishBlue"
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
