import React from "react";

import Logo from "../../public/img/logo-white.svg";
import Facebook from "../../public/img/icon-facebook.svg";
import Youtube from "../../public/img/icon-youtube.svg";
import Twitter from "../../public/img/icon-twitter.svg";
import Pinterest from "../../public/img/icon-pinterest.svg";
import Instagram from "../../public/img/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue flex-col md:flex">
      {/* Socials */}
      <div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <img src={Logo} alt="Logo Manage" className="my-5" />
          <div className="flex justify-center space-x-4">
            <img src={Facebook} alt="" />
            <img src={Youtube} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </div>

      {/* Pages */}
      <div className="flex justify-around space-x-32 mb-5">
        <ul className="flex flex-col space-y-3 text-white">
          <li class="hover:text-brightRed">Home</li>
          <li class="hover:text-brightRed">Pricing</li>
          <li class="hover:text-brightRed">Products</li>
          <li class="hover:text-brightRed">About us</li>
        </ul>
        <ul className="flex flex-col space-y-3 text-white">
          <li class="hover:text-brightRed">Career</li>
          <li class="hover:text-brightRed">Community</li>
          <li class="hover:text-brightRed">Privacy Policy</li>
        </ul>
      </div>

      {/* Inbox */}
      <div className="flex flex-col justify-between">
        <form>
          <div className="flex space-x-3 w-40 justify-center mx-auto md:w-auto">
            <input
              type="text"
              className="flex px-4 rounded-full focus:outline-none"
              placeholder="updates in your inbox"
            />
            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
              Go
            </button>
          </div>
        </form>
        <div class="text-white text-center my-5 md:block">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
