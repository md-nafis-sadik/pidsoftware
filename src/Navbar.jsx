import { useState } from "react";
import { Link } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { BsPersonPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {

  const [isHidden, setIsHidden] = useState(false);
  const [isBar, setIsBar] = useState(false);

  const changeBar = () => {
    setIsBar(!isBar);
  }

  const toggleMenu = () => {
    setIsHidden(!isHidden);
    changeBar();
  }

  return (
    <nav className="h-14 flex justify-between relative px-4 lg:px-8 xl:px-16">
    <div className="flex md:hidden justify-center items-center text-[25px]">
        <span className={`${isBar ? 'hidden': 'block'} cursor-pointer`} onClick={toggleMenu}><LiaBarsSolid/></span>
        <span className={`${isBar ? 'block': 'hidden'} cursor-pointer`}  onClick={toggleMenu}><RxCross2/></span>
      </div>
      <div className="flex">
      
        <div>
          <img src="./logo.png" className="py-4 px-2 mr-3 w-[125px]" />
        </div>
        <ul className={`${isHidden ? 'block': 'hidden'} absolute bg-[#f2f2f2] left-0 top-14 w-full md:flex md:static md:bg-white justify-center items-center z-30`}>
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/" className="hover:border-b-2 hover:border-b-gray-900">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/check-key" className="hover:border-b-2 hover:border-b-gray-900 ">Check Key</Link>
          </li>
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/redeem-ms" className="hover:border-b-2 hover:border-b-gray-900 ">Redeem Microsoft</Link>
          </li>
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/office365" className="hover:border-b-2 hover:border-b-gray-900 ">Office 365</Link>
          </li> 
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/apis" className="hover:border-b-2 hover:border-b-gray-900 ">APIs</Link>
          </li>
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/my-account" className="hover:border-b-2 hover:border-b-gray-900 ">My Account</Link>
          </li>
          <li className="p-4 border-b border-gray-200 md:border-none md:py-3 md:px-2 md:text-[13px] cursor-pointer">
            <Link to="/contuct-us" className="hover:border-b-2 hover:border-b-gray-900 ">Contact Us</Link>
          </li>
          
          
        </ul>
      </div>
      <ul className="flex justify-center items-center">
          <li className="py-4 px-2 text-[13px] cursor-pointer">
            <Link to="/login" className="hover:border-b-2 hover:border-b-gray-900 "><div className="border border-gray-600 rounded-full p-1"> <BsPersonPlus className="text-lg text-gray-600"/></div></Link>
          </li>
      </ul>
    </nav>
  );
}
