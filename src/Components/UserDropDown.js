import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { baseUrl } from '../utils/constants';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const UserDropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user)

    const logoutHandler = async () => {
        try {
            const res = await axios.post(baseUrl + "/logout", {}, { withCredentials: true });
            dispatch(removeUser());
        }
        catch (err) {
            if (err.status === 401) {
                navigate("/login")
            }
            console.error("ERROR : " + err.message);
        }
    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const getInitials = (name) => {
        if (!name) return "?";
        return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    };
    return (
        <li className="relative" ref={dropdownRef}>

            <button
                onClick={() =>{
                    if(!user){
                        navigate("/login");
                    }
                    setDropdownOpen(!dropdownOpen);
                }}
                className="w-10 h-10 rounded-full bg-[#27D673] border-2 border-[#1B5230]
                flex items-center justify-center
                text-[#06250F] font-bold text-sm cursor-pointer
                hover:border-[#27D673] transition-colors duration-200">
                {user ? getInitials(user.fullName) : "login"}
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 top-12 w-52 bg-[#123B22] border border-[#1B5230]
                rounded-2xl overflow-hidden shadow-2xl shadow-black/40 z-999">

                    <div className="px-4 py-3 border-b border-[#1B5230]">
                        <p className="text-[#EAF7EE] text-sm font-semibold m-0">{user?.fullName}</p>
                        <p className="text-[#8FBE9F] text-xs mt-0.5">{user?.email}</p>
                    </div>

                    <Link
                        to="/orderHistory"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-[#EAF7EE] text-sm
                        hover:bg-[#0E2A18] transition-colors duration-150">
                        Order history
                    </Link>

                    <div className="border-t border-[#1B5230]">
                        <button
                            onClick={() => {
                                logoutHandler();
                                setDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-red-400 text-sm
                            hover:bg-red-500/10 transition-colors duration-150 cursor-pointer">
                            Log out
                        </button>
                    </div>
                </div>
            )}
        </li>
    )
}

export default UserDropDown