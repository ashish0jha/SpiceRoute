import { LOGO_Link } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import UserDropDown from "./UserDropDown";

const Header = () => {
    //subscribing to the store
    const CartItems = useSelector((store) => store.cart.items);

    return (
        <div className="sticky top-0 z-50 flex justify-between shadow-xl items-center h-[70px] md:h-[100px] bg-[#15201A] border-b border-[#1B5230] w-full px-3 md:px-0 overflow-visible">
            <div className='LogoPart pl-2 md:pl-5'>
                <a href="/">
                    <img className="w-16 md:w-25" src={LOGO_Link} alt="Logo" />
                </a>
            </div>
            <div className='nav-items overflow-visible'>
                <ul className="flex items-center mx-2 md:mx-5 gap-3 md:gap-10 text-sm md:text-2xl font-semibold whitespace-nowrap">
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hidden sm:block p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/cart">Cart - {CartItems.length}</Link>
                    </li>
                    <UserDropDown/>
                </ul>
            </div>
        </div>
    )
}
export default Header;