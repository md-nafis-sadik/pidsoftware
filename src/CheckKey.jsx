import { useState } from "react";
import { FaAngleDown} from "react-icons/fa6";
import Navbar from "./Navbar";
import Topper from './Topper';

export default function CheckKey(){
    const options = ['Sort By Order Asc', 'Online Key', '0xC060C008', '0xC004C008', '0xC004C003', 'Activated With Product Key'];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return(
        <section>
        <Navbar />
        <Topper/>
        <div className="mx-[5%] my-4 p-2">

            <div className="w-full lg:w-2/3">

                <div className="mb-4">
                    <div className="mb-1">
                        <label htmlFor="lids" className="w-full inline-block mb-2 text-sm font-semibold">Enter product key(s) separated by line breaks(maximum 100 product keys):</label>
                        <textarea id="lids" rows="6" placeholder="93MGM-NTFKD-6BK63-R6FY.." className="w-full outline-none rounded-sm border border-gray-400 py-2 px-4 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"></textarea>
                    </div>
                    <div className="block sm:flex justify-between items-center text-sm">

                        <div>
                            <button className="relative bg-gray-100 p-2 rounded-sm flex items-center shadow-sm border border-gray-300 hover:bg-gray-200 focus:border-gray-500 mb-2 sm:mb-0" onClick={toggleDropdown}>{selectedOption} <FaAngleDown  className="ml-2" /></button>
                            { isOpen && ( 
                                <ul className="absolute bg-gray-100 rounded-sm shadow-md">
                                    {options.map((option) => (
                                        <li key={option} onClick={() => handleOptionClick(option)} className="cursor-pointer p-4 hover:bg-gray-200">
                                            {option}
                                        </li>
                            ))}
                                </ul>
                            )}
                        </div>

                        <button className="inline-block px-4 py-2 bg-[#0067b8] rounded-sm text-white font-semibold mb-1 sm:mb-0 text-sm hover:bg-[#005ba0]">Check Data Online</button>
                        
                        <div>
                            <input type="checkbox" id="just-description" name="just-description" value="just-description"/>
                            <label htmlFor="just-description" className="text-sm"> Just Get Descripton</label>
                        </div>
                    </div>
                </div>
                
                    <div className="">
                        <textarea id="textarea-results" rows="10" placeholder="" className="w-full outline-none rounded-sm border border-gray-400 py-2 px-4 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"></textarea>
                    </div>
                
                <div className="block xl:flex my-1 justify-between ">
                    <div className="xl:order-2"><img src="./3.png"></img></div>
                    <div className="text-xs">
                        <div className="flex">
                            <span className="mr-1">Proceeded: 0/0</span>
                            <span>Speed: 0.000(sec)</span>
                        </div>
                        <div className="">
                            <span>Powered by TIC Limited</span>
                        </div>

                    </div>
                    
                </div>
                
            </div>

        </div>
        </section>
    )
}