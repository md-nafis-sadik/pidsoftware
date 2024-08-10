import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function MyAccountNav({ setActiveSection }) {
  const [isHidden, setIsHidden] = useState(false);
  const [isBar, setIsBar] = useState(false);

  const changeBar = () => {
    setIsBar(!isBar);
  };

  const toggleMenu = () => {
    setIsHidden(!isHidden);
    changeBar();
  };

  return (
    <nav className="py-3 md:py-0 bg-gray-100 flex justify-between relative px-4 lg:px-8 xl:px-16">
      <div className="flex md:hidden justify-center items-center text-[25px]">
        <span
          className={`${isBar ? "hidden" : "flex"} cursor-pointer text-[16px] font-semibold items-center`}
          onClick={toggleMenu}
        >
          <span className="mr-1">Settings</span>
          <FaAngleDown />
        </span>
        <span
          className={`${isBar ? "flex" : "hidden"} cursor-pointer text-[16px] font-semibold items-center`}
          onClick={toggleMenu}
        >
          <span className="mr-1">Settings</span>
          <FaAngleUp />
        </span>
      </div>
      <div className="flex">
        <ul
          className={`${
            isHidden ? "block" : "hidden"
          } absolute bg-gray-100 left-0 top-11 w-full md:flex md:static md:bg-gray-100 justify-center items-center z-20`}
        >
          <li
            className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-5 md:text-[13px] hover:bg-gray-300 cursor-pointer"
            onClick={() => setActiveSection("Products")}
          >
            <span>Products</span>
          </li>
          <li
            className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-5 md:text-[13px] hover:bg-gray-300 cursor-pointer group"

          >
            <span className="flex justify items-center relative">
              <span className="mr-2">Billing</span>
              <FaAngleDown className="font-thin" />
            </span>
            <ul className="bg-gray-100 top-28 left-0 md:left-[106px] lg:left-[122px] xl:left-[155px] md:top-11 absolute md:bg-gray-100 justify-center items-center z-50 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-6 md:text-[13px] hover:bg-gray-300 cursor-pointer" onClick={() => setActiveSection("Balance")}>
                <span>Balance</span>
              </li>
              <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-6 md:text-[13px] hover:bg-gray-300 cursor-pointer" onClick={() => setActiveSection("BillingHistories")}>
                <span className="flex justify items-center">Billing Histories</span>
              </li>
            </ul>
          </li>
          <li
            className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-5 md:text-[13px] hover:bg-gray-300 cursor-pointer"
            onClick={() => setActiveSection("ApiKey")}
          >
            <span>API Key</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
