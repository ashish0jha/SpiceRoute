import React, { useState, useEffect } from 'react'
import axios from "axios";
import { baseUrl } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchOrderHistory = async()=>{
    try{
        const res = await axios.get(baseUrl+"/user/orderHistory",{withCredentials:true});
        setOrders(res.data.orderDetails);
    }
    catch(err){
        if(err.status===401){
            navigate("/login")
        }
        console.error("");
    }
  }
  useEffect(()=>{
    fetchOrderHistory();
  },[])

  return (
      <div className="flex flex-col items-center bg-[#15201A] min-h-screen px-4 py-8">

        <h1 className="font-extrabold text-2xl md:text-3xl text-[#EAF7EE] mb-8">Your Orders</h1>

        {orders.length === 0 ? (
            <div className="flex flex-col items-center text-center mt-10">
                <p className="text-[#8FBE9F] mb-4">You haven't placed any orders yet.</p>
                <a
                  href="/"
                  className="bg-[#27D673] text-[#06250F] px-5 py-2 rounded-lg font-bold hover:bg-[#3CE585]"
                >
                  Explore Restaurants
                </a>
            </div>
        ) : (
            <div className="w-full md:w-[60vw] flex flex-col gap-5">
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="bg-[#123B22] border border-[#1B5230] rounded-2xl p-5 shadow-md hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3 pb-3 border-b border-[#1B5230]">
                            <div>
                                <h3 className="font-bold text-[#EAF7EE] text-base">
                                    Order #{order._id?.slice(-6).toUpperCase()}
                                </h3>
                                <p className="text-[#8FBE9F] text-xs">
                                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </p>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-[#0E2A18] text-[#27D673] text-xs font-bold w-fit">
                                {"Placed"}
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 mb-3">
                            {order.items?.map((item, idx) => (
                                <div key={item.id} className="flex items-center justify-between text-sm">
                                    <span className="text-[#EAF7EE]">
                                        {item.name} <span className="text-[#8FBE9F]">× {item.qty}</span>
                                    </span>
                                    <span className="text-[#8FBE9F]">₹{item.price * item.qty}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-[#1B5230]">
                            <span className="text-[#8FBE9F] text-sm">Total</span>
                            <span className="text-[#27D673] font-bold text-lg">₹{order.amount/100}</span>
                        </div>
                    </div>
                ))}
            </div>
        )}

      </div>
  )
}

export default OrderHistory;