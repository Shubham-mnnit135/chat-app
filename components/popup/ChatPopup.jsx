
import React from "react";
import PopupWrapper from "./PopupWrapper";
import { useAuth } from "@/context/authContext";
import { useChatContext } from "@/context/chatContext";
import Avatar from "../Avatar";
import {
  deleteField,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Search from "../Search";
import ChatHeader from "../ChatHeader";
import Messages from "../Messages";
import ChatFooter from "../ChatFooter";
import ChatPopupWrapper from "./ChatPopupWrapper";

const UsersPopup = (props) => {
  const { currentUser } = useAuth();
  const { users, dispatch,setSelectedChat } = useChatContext();

  
  return (
    <ChatPopupWrapper {...props} >
      <ChatHeader/>
      <Messages/>
      <ChatFooter/>
    </ChatPopupWrapper>
  );
};

export default UsersPopup;