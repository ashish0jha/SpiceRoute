import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constants";

const Contact = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [msg,setMsg] = useState("");
    const [istoast,setToast] = useState(false);

    const formSubmitHandler = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(baseUrl+"/contact/feedback",{
                name,
                email,
                msg
            },{withCredentials:true});
            setToast(true);
            setTimeout(()=>setToast(false),3000)
            setEmail("");
            setName("");
            setMsg("");
        }
        catch(err){
            if(err.status===401){
                navigate("/login");
            }
            console.error(err.message)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center bg-[#15201A] min-h-screen px-4">
            {istoast && <div className="font-bold text-white p-5 bg-red-400 rounded-2xl">Thanks for your lovely message </div>}
            <h1 className="font-bold text-2xl md:text-3xl m-4 text-[#EAF7EE]">Contact Page</h1>
            <h1 className="text-[#8FBE9F] text-sm md:text-base text-center">Write your Message to Me</h1>
            <form className="flex flex-col border border-[#1B5230] p-5 md:p-8 m-4 mb-10 rounded-2xl shadow-2xl bg-[#123B22] w-full md:w-auto">
                <input className="border border-[#1B5230] m-2 p-1 rounded-md bg-[#0E2A18] text-[#EAF7EE] placeholder:text-[#8FBE9F] outline-none focus:ring-2 focus:ring-[#27D673]/60" type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input className="border border-[#1B5230] m-2 p-1 rounded-md bg-[#0E2A18] text-[#EAF7EE] placeholder:text-[#8FBE9F] outline-none focus:ring-2 focus:ring-[#27D673]/60" type="email" placeholder="Enter Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <textarea className="border border-[#1B5230] m-2 p-1 rounded-md bg-[#0E2A18] text-[#EAF7EE] placeholder:text-[#8FBE9F] outline-none focus:ring-2 focus:ring-[#27D673]/60" placeholder="Enter Your Message" value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
                <button className="bg-[#27D673] p-1 m-2 rounded-lg text-[#06250F] font-bold hover:bg-[#3CE585]" onClick={formSubmitHandler}>Submit</button>
            </form>
            <div className="text-center mb-10">
                <h1 className="font-bold border-b-2 border-[#1B5230] mb-3 text-[#EAF7EE]">You can mail at :</h1>
                <ul>
                    <li><a href="mailto:ashish.23418@knit.ac.in" className="hover:underline text-[#8FBE9F] hover:text-[#27D673]">✉ Write Mail</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;