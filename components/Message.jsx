import { useAuth } from '@/context/authContext';
import React from 'react'

const Message = ({message}) => {

  const {currentUser} = useAuth();
  const self = message.sender === currentUser.uid;  
  return (
    <div className={`mb-5 max-w-[75%] ${self ? "self-end" : ""}`}>
      message
    </div>
  )
}

export default Message
