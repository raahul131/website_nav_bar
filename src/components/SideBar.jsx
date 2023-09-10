import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="md:hidden">
        <div
          className={`h-screen
           ${
            open
              ? "w-36 bg-red-700 text-white duration-300"
              : "w-0 text-red-700 duration-300"
          } pt-2 px-2 `}
        >
          <GiHamburgerMenu
            className={`cursor-pointer text-2xl`}
            onClick={() => setOpen(!open)}
          />

          <di className={`${!open ? " hidden" : ""} text-lg`}>
            <ul className="pt-4 ">
              <li className="px-2 p-1 cursor-pointer hover:bg-white hover:text-red-700 duration-300 transition-all border-b-[0.5px] border-black">
                Item 1
              </li>
              <li className="px-2 p-1  cursor-pointer hover:bg-white hover:text-red-700 duration-300 transition-all border-b-[0.5px] border-black">
                Item 2
              </li>
              <li className="px-2 p-1  cursor-pointer hover:bg-white hover:text-red-700 duration-300 transition-all border-b-[0.5px] border-black">
                Item 3
              </li>
              <li className="px-2 p-1  cursor-pointer hover:bg-white hover:text-red-700 duration-300 transition-all border-b-[0.5px] border-black">
                Item 4
              </li>
              <li className="px-2 p-1  cursor-pointer hover:bg-white hover:text-red-700 duration-300 transition-all border-b-[0.5px] border-black">
                Item 5
              </li>
            </ul>
          </di>
        </div>
      </div>
    </>
  );
};

export default SideBar;
