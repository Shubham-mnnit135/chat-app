import React from 'react'
import { BiEdit} from "react-icons/bi";
import Avatar from './Avatar';

const LeftNav = () => {
  return (
    <div className="w-[80px] items-center flex flex-col justify-between py-5 shrink-0 transition-all">
       <div className="relative group cursor-pointer">
         <div>Avatar</div>
         <div className="w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex">
            <BiEdit size={14} />
         </div>
       </div>

       <div className="flex gap-5 flex-col items-center">
          <span>icon</span>
          <span>icon</span>
       </div>
    </div>
  )
}

export default LeftNav
