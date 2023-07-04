import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { useChatContext } from '@/context/chatContext'
import ChatFooter from './ChatFooter'


const Chat = () => {
  const {data} = useChatContext();
  return (
    <div className="flex flex-col p-5 grow">
     <ChatHeader/>
     {data.chatId && <Messages/>}
     <ChatFooter/>
    </div>
  )
}

export default Chat;
