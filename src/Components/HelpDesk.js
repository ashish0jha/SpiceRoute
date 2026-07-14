import React, { useState } from 'react'
import { MessageCircleQuestion, X } from 'lucide-react';
import { useNavigate } from "react-router-dom"

const HelpDesk = () => {
  const [helpDeskSection, setHelpDeskSection] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3'>
      {helpDeskSection && <div className='w-80 rounded-2xl bg-[#0f2e1a] border border-emerald-800/50 shadow-2xl shadow-black/40 overflow-hidden cursor-pointer' onClick={() => navigate("/helpdesk")}>
        <div className='flex items-center justify-between px-4 py-3 bg-emerald-500'>
          <div className='flex items-center gap-2'>
            <MessageCircleQuestion size={20} className='text-emerald-950' />
            <span className='font-bold text-emerald-950'>Help Desk</span>
          </div>
          <button className='text-emerald-950 hover:bg-emerald-600/40 rounded-full p-1 transition' onClick={() => setHelpDeskSection(!helpDeskSection)}>
            <X size={18} />
          </button>
        </div>

        <div className='p-4 space-y-3'>
          <p className='text-sm text-emerald-100/80'>
            Hi there 👋 Need help with an order, a restaurant, or your account? We're here for you.
          </p>
        </div>
      </div>}
      <button className='w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-900/50 transition cursor-pointer' onClick={() => setHelpDeskSection(!helpDeskSection)}>
        <MessageCircleQuestion size={26} className='text-emerald-950' />
      </button>
    </div>
  )
}

export default HelpDesk;