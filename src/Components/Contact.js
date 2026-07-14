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
        <div className="bg-[#15201A] min-h-screen px-4 py-5">

            {istoast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                    flex items-center gap-3 bg-[#123B22] border border-[#1B5230]
                    border-l-4 border-l-[#27D673] rounded-2xl px-5 py-3.5
                    shadow-2xl shadow-black/40 w-[90vw] md:w-auto md:min-w-75">
                    <span className="text-[#27D673] text-xl shrink-0">✓</span>
                    <div>
                        <p className="text-[#EAF7EE] text-sm font-semibold m-0">Message sent</p>
                        <p className="text-[#8FBE9F] text-xs mt-0.5 m-0">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                </div>
            )}

            <div className="max-w-xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="font-extrabold text-2xl md:text-3xl text-[#EAF7EE] mb-2">Get in Touch</h1>
                    <p className="text-[#8FBE9F] text-sm md:text-base">Have a question or feedback? Drop a message and I'll get back to you.</p>
                </div>

                <form className="bg-[#123B22] border border-[#1B5230] rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/30 flex flex-col gap-4">

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#8FBE9F] text-xs font-medium">Your Name</label>
                        <input
                            className="border border-[#1B5230] px-4 py-2.5 rounded-xl bg-[#0E2A18] text-[#EAF7EE]
                                placeholder:text-[#8FBE9F]/50 outline-none
                                focus:ring-2 focus:ring-[#27D673]/50 focus:border-[#27D673]
                                transition-all duration-200 text-sm"
                            type="text"
                            placeholder="Ashish Kumar"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#8FBE9F] text-xs font-medium">Email Address</label>
                        <input
                            className="border border-[#1B5230] px-4 py-2.5 rounded-xl bg-[#0E2A18] text-[#EAF7EE]
                                placeholder:text-[#8FBE9F]/50 outline-none
                                focus:ring-2 focus:ring-[#27D673]/50 focus:border-[#27D673]
                                transition-all duration-200 text-sm"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#8FBE9F] text-xs font-medium">Message</label>
                        <textarea
                            className="border border-[#1B5230] px-4 py-2.5 rounded-xl bg-[#0E2A18] text-[#EAF7EE]
                                placeholder:text-[#8FBE9F]/50 outline-none
                                focus:ring-2 focus:ring-[#27D673]/50 focus:border-[#27D673]
                                transition-all duration-200 text-sm resize-none h-32"
                            placeholder="Write your message here..."
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        />
                    </div>

                    <button
                        className="w-full bg-[#27D673] py-2.5 rounded-xl text-[#06250F] font-bold
                            hover:bg-[#3CE585] transition-colors duration-200 text-sm mt-1"
                        onClick={formSubmitHandler}>
                        Send Message
                    </button>

                </form>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#123B22] border border-[#1B5230] rounded-2xl px-5 py-3 hover:border-[#27D673]/40 transition-colors duration-200">
                        <span className="text-[#27D673] text-sm">✉</span>
                        <a
                            href="mailto:ashish.23418@knit.ac.in"
                            className="text-[#8FBE9F] hover:text-[#27D673] text-sm transition-colors duration-200">
                            ashish.23418@knit.ac.in
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;