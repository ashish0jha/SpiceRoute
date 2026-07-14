import Cards3 from "./Card3";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom";
import onlineStatus from "../utils/useonlinestatus";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import useRestaurants from "../utils/useRestra";
import HelpDesk from "./HelpDesk";

let resiii;

const Body = () => {
    const [btnName, setbtnname] = useState("Top Rated Restaurant");
    const [searchText, setsearchText] = useState("");
    const [msg, setmsg] = useState("");
    const isOnline = onlineStatus();

    const { ResList, setResList, loading, error, hasMore, lastCardRef } = useRestaurants();
    resiii = ResList;

    if (ResList.length === 0) {
        return <Shimmer />
    }

    if (!isOnline) {
        return (
            <div>
                <h1 className="flex justify-center text-4xl items-center">🔴 Offline , Please check your internet connection!!</h1>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-[#15201A] p-4 scroll-smooth">
            {error && <p>{error}</p>}

            <div className="sticky top-0 z-20 mx-2 md:mx-35 mt-4 mb-2 rounded-3xl bg-[#123B22] border border-[#1B5230] shadow-lg px-4 md:px-6 py-4">
                <div className="flex flex-col md:flex-row items-center justify-evenly gap-3 md:gap-4">

                    <div className="px-4 md:px-5 py-2 rounded-2xl font-semibold text-xs md:text-sm cursor-pointer
                        bg-[#27D673] text-[#06250F]
                        hover:bg-[#3CE585] hover:scale-105
                        transition-all duration-300 w-full md:w-auto text-center">
                        🍽️ Restaurant count : {ResList.length}
                    </div>

                    <div className='search-bar relative w-full md:w-auto'>
                        <input type="text" placeholder='Enter Food-Items'
                            className='h-10 md:h-11 w-full md:w-72 px-4 md:px-5 pr-10 text-sm text-[#EAF7EE]
                                bg-[#0E2A18] border border-[#1B5230]
                                rounded-full outline-none
                                focus:ring-2 focus:ring-[#27D673]/60 focus:border-[#27D673]
                                hover:border-[#27D673]/50 hover:scale-[1.02] md:hover:scale-[1.03]
                                transition-all duration-300 placeholder:text-[#8FBE9F]'
                            value={searchText}
                            onChange={(e) => { setsearchText(e.target.value); }}
                            onKeyDown={(e) => {
                                const key = e.target.value;
                                if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === 'Enter') {
                                    const filteredData = resiii.filter((resty) => {
                                        let data = "";
                                        for (let item of resty.cuisines) {
                                            data += item;
                                        }
                                        return data.toLowerCase().includes(searchText.toLowerCase());
                                    });
                                    if (filteredData.length === 0) {
                                        setmsg("No Restaurent Found !!");
                                        setTimeout(() => { setmsg(""); }, 2000);
                                    } else {
                                        setResList(filteredData);
                                        setbtnname("Show All Restaurants");
                                        setmsg("")
                                    }
                                }
                            }}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#27D673] text-base pointer-events-none">
                            🔍
                        </span>
                    </div>

                    <div className="w-full md:w-auto">
                        <button className="w-full md:w-auto px-5 md:px-6 py-2 rounded-2xl font-semibold text-xs md:text-sm cursor-pointer
                            text-[#8FBE9F] bg-[#0E2A18] border border-[#1B5230]
                            hover:text-[#06250F] hover:bg-[#27D673] hover:border-[#27D673]
                            hover:scale-105
                            transition-all duration-300"
                            onClick={() => {
                                const filteredData = ResList.filter((resty) => (resty.rating > 4.2))
                                setbtnname(btnName === "Top Rated Restaurant" ? "Show All Restaurants" : "Top Rated Restaurant")
                                if (btnName === "Show All Restaurants") {
                                    setResList(resiii)
                                } else {
                                    setResList(filteredData);
                                }
                            }}>{btnName === "Top Rated Restaurant" ? "⭐ " : "📋 "}{btnName}</button>
                    </div>
                </div>
            </div>

            <h3 className="m-5 text-center text-sm md:text-base font-semibold text-[#27D673] animate-pulse">{msg}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,280px)] justify-center gap-5 md:gap-7 px-4 md:px-6 py-6">
                {
                    ResList.map((resty, index) => {
                        const isLast = index === ResList.length - 1;
                        return (
                            <div key={index} ref={isLast ? lastCardRef : null} className="animate-fadeIn">
                                <Cards3 Res={resty} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-10 flex items-center justify-center">
                {loading && (
                    <p className="text-center text-[#27D673] animate-pulse">Loading more...</p>
                )}
                {!hasMore && ResList.length > 0 && (
                    <p className="text-center text-[#8FBE9F]">You've reached the end 🍃</p>
                )}
            </div>
            <HelpDesk/>
        </div>
    )
}

export default Body;