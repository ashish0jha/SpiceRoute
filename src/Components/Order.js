import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { clearCart } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

const Order = ({ amount, setCartItems }) => {

  const navigate = useNavigate();
  const [orderDone, setOrderDone] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const orderIdRef = useRef("");

  const paymentHandler = async () => {
    if (amount === 0) return;
    try {
      const order = await axios.post(baseUrl + "/payment/order", { amount }, { withCredentials: true });

      const { keyId, currency, orderId, notes } = order.data;

      orderIdRef.current = orderId;

      const options = {
        key: keyId,
        amount: order.amount,
        currency,
        name: "AKO's FOOD DELIVERY WEBAPP",
        description: "Taste your meal with AKO's Delivery App",
        order_id: orderId,
        prefill: {
          name: notes.fullName,
          email: notes.email,
          contact: '9999999999'
        },
        theme: {
          color: '#27D673'
        },
        handler: verifyPayment
      };

      const rzp = new Razorpay(options);
      rzp.open();
    }
    catch (err) {
      if (err.status) {
        navigate("/login")
      }
      console.error(err?.response?.data?.message || err.message);
    }
  }

  const verifyPayment = async () => {
    try {
      const res = await axios.post(baseUrl + "/payment/verify",{orderId:orderIdRef.current}, { withCredentials: true });

      if (res.data.isPaymentDone) {
        setOrderMessage("Your Order is placed SuccessFully");
        setIsSuccess(true)
        clearCartHandler();
        navigate("/orderHistory")
      } else {
        setOrderMessage("Payment failed");
        setIsSuccess(false)
      }
      setOrderDone(true);
      setTimeout(() => {
        setOrderDone(false)
      }, 3000)
    }
    catch (err) {
      console.log(err.message);
    }
  }

  const clearCartHandler = async () => {
    try {
      const res = await axios.delete(baseUrl + "/cart/clear", { withCredentials: true });
      dispatch(clearCart());
      () => setCartItems([]);
    }
    catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      {orderDone && <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-3
        bg-[#123B22] border border-[#1B5230] rounded-2xl
        px-4 py-3.5 shadow-2xl shadow-black/40
        w-[90vw] md:w-auto md:min-w-[320px] md:max-w-105
        ${isSuccess ? "border-l-4 border-l-[#27D673]" : "border-l-4 border-l-red-500"}`}>

            <div className="w-9 h-9 rounded-full bg-[#0E2A18] flex items-center justify-center shrink-0">
                {isSuccess
                    ? <span className="text-[#27D673] text-xl">✓</span>
                    : <span className="text-red-400 text-xl">✕</span>
                }
            </div>

            <div className="flex-1">
                <p className="text-[#EAF7EE] text-sm font-semibold m-0">
                    {isSuccess ? "Order placed" : "Payment failed"}
                </p>
                <p className="text-[#8FBE9F] text-xs mt-0.5 m-0">
                    {isSuccess ? "Your food is on its way!" : "Something went wrong. Try again."}
                </p>
            </div>

            <button
                onClick={() => setOrderDone(false)}
                className="text-[#8FBE9F] hover:text-[#EAF7EE] text-lg leading-none bg-transparent border-0 cursor-pointer shrink-0">
                ✕
            </button>
      </div>}
      <button
        className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#c3e3d1]"
        onClick={paymentHandler}>
        Order
      </button>
    </>

  )
}

export default Order