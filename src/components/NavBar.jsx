import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="shadow-md shadow-red-500 w-full fixed top-0 left-0">
        <div className="md:flex bg-white py-4 md:px-10 px-7 justify-between">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-mono">
            LOGO
          </div>
          <div className="text-3xl absolute right-8 top-4  md:hidden">
            <button onClick={toggleNavbar} className="text-black">
              {open ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
          </div>
          {/* Desktop navigation menu */}
          <ul
            className={`hidden md:flex md:items-center md:pb-0 pb-12 absolute md:static  rounded-lg md:z-auto z-[-1] left-0 w-20 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}
          >
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Home
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              About
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Profile
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Projects
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Contact
            </li>
          </ul>
        </div>
        {/* Mobile menu items (visible when the menu is open) */}
        {open && (
          <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  md:z-auto z-[-1] left-0 w-32 md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-in ">
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Home
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              About
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Profile
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Projects
            </li>
            <li className="md:ml-8 text-xl cursor-pointer hover:text-red-600 md:my-0 my-7 hover:underline">
              Contact
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
