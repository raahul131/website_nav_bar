import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MainBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <div className="flex justify-between  p-2  shadow-md shadow-red-600 items-center">
        <div className="font-bold rounded-full bg-red-500 p-2 mx-2 text-white cursor-pointer items-center hover:scale-105 transition-all duration-300 shadow-md">
          LOGO
        </div>
        <div>
          <ul className="flex text-red-600 font-medium pr-4">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="pl-3 cursor-pointer hover:underline">About</li>
            <li className="pl-3 cursor-pointer hover:underline">
              Coding Profile
            </li>
            <li className="pl-3 cursor-pointer hover:underline">Projects</li>
            <li className="pl-3 cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>
        <div
          className={`md:hidden cursor-pointer flex ${
            !open ? "w-24 bg-white" : ""
          }`}
        >
          <GiHamburgerMenu
            className="text-3xl text-red-600"
            onClick={() => setOpen(!open)}
          />

          {/* <div className={`${!open} ? "hidden" : ""` }>
            <ul>
              <li></li>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainBar;
