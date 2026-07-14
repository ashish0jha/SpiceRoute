import React, { useEffect, useRef, useState } from 'react'
import { Send, Bot, User, Search, HelpCircle } from 'lucide-react'
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const HelpChat = () => {
  const [message, setMessage] = useState('');
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const chatContainerRef = useRef(null);
  const dummyData = [
    { sender: 'bot', text: "Hi 👋 Welcome to Help Chat. Ask me anything about your orders, restaurants, or account." },
  ]
  const [messages, setMessages] = useState(dummyData)

  useEffect(()=>{
    async function fetchPastChat (){
      const res = await axios.get(baseUrl+"/pastChat",{withCredentials:true});
      if(res.data.pastChat){
        setMessages(res.data.pastChat.messages);
      }
    }
    fetchPastChat();
  },[])

  useEffect(()=>{
    bottomRef.current.scrollIntoView({behavior:"smooth"});
  },[messages])

  const responseHandler = async () => {
    try {
      setMessages((val) => [...val, { sender: 'user', text: message }]);
      setMessage('')
      const res = await axios.post(baseUrl + "/ask", { prompt: message }, { withCredentials: true });
      setMessages((val) => [...val, { sender: 'bot', text:res.data.response }]);
    }
    catch (err) {
      if(err.status === 401){
        navigate("/login")
      }
      console.log(err.message)
    }
  }
  const onEnterButton = (e) => {
    if (e.key === 'Enter') {
      responseHandler();
    }
  }

  return (
    <div className='min-h-screen bg-[#0a1f13] text-emerald-50'>
      <div className='flex items-center px-10 py-5 border-b border-emerald-900/40'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center'>
            <HelpCircle size={18} className='text-emerald-950' />
          </div>
          <span className='font-bold text-lg'>Help Center</span>
        </div>
      </div>

      <div className='bg-[#0f2e1a] md:w-1/2 mx-3 md:mx-auto rounded-2xl border border-emerald-800/50 flex flex-col h-144 overflow-hidden'>
        <div className='sticky top-0 flex items-center gap-2 px-5 py-4 bg-emerald-500'>
          <Bot size={20} className='text-emerald-950' />
          <span className='font-bold text-emerald-950'>Chat with support</span>
        </div>

        <div className='flex-1 overflow-y-auto px-5 py-4 space-y-3'>
          {messages.map((msg, i) => (
            <div key={i} ref={chatContainerRef} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'bot' && (
                <div className='w-7 h-7 rounded-full bg-emerald-800/50 flex items-center justify-center shrink-0'>
                  <Bot size={14} className='text-emerald-300' />
                </div>
              )}
              <div
                className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm leading-snug ${msg.sender === 'user'
                    ? 'bg-emerald-500 text-emerald-950 rounded-br-sm'
                    : 'bg-[#123821] text-emerald-50 border border-emerald-800/40 rounded-bl-sm'
                  }`}
              >
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div className='w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0'>
                  <User size={14} className='text-emerald-950' />
                </div>
              )}
              <div ref={bottomRef}></div>
            </div>
          ))}
        </div>


        <div className='p-4 border-t border-emerald-800/40'>
          <div className='flex items-center gap-2 bg-[#123821] rounded-full px-4 py-2.5 border border-emerald-800/40'>
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onEnterButton}
              placeholder='Type your message...'
              className='flex-1 bg-transparent outline-none text-sm text-emerald-50 placeholder:text-emerald-100/40'
            />
            <button className='w-9 h-9 flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 transition cursor-pointer' onClick={responseHandler}>
              <Send size={16} className='text-emerald-950' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpChat;