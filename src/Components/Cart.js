import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { addItem, clearCart } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import CartHeader from "./CartHeader";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const data = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const fetchCart = async () => {
        try {
            const res = await axios.get(baseUrl + "/cart/view", { withCredentials: true });

            const itemsFromBE = res.data.cartItems[0]?.items;
            if(!itemsFromBE){
                setCartItems([]);
                return
            } 
            setCartItems(itemsFromBE);
            for(let item of itemsFromBE){
                dispatch(addItem(item));
            }
        }
        catch (err) {
            if(err.status === 401){
                navigate("/login")
            }
            console.error(err.message);
        }
    }
    useEffect(() => {
        if(data.length>0){
            setCartItems(data);
            return;
        }
        fetchCart();
    }, [data])
   
    if(!cartItems) return;

    return (
        <div className="flex flex-col items-center bg-[#15201A] min-h-screen px-4">
            <h1 className="font-bold text-2xl md:text-3xl m-4 text-[#EAF7EE]">Cart</h1>

            <CartHeader cartItems={cartItems} />
            
            {cartItems?.length == 0 ? (<a href="/" className="text-[#8FBE9F] hover:underline hover:text-[#27D673]">Cart is Empty</a>) : ""}
            <CartItem menuPart={cartItems} setCartItems={setCartItems}/>

        </div>
    )
}

export default Cart;