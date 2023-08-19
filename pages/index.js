import { useAuth } from "@/context/authContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import LeftNav from "@/components/LeftNav";
import Chats from "@/components/Chats";
import Chat from "@/components/Chat";
import { useChatContext } from "@/context/chatContext";
import { useWindowSize } from '@react-hook/window-size';
import Head from "next/head";

const Home = () => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [windowWidth] = useWindowSize();

  const { signOut, currentUser, isLoading } = useAuth();
  const { data } = useChatContext();
  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, isLoading]);
  
  useEffect(() => {
    setWidth(windowWidth);
    console.log(width);
  }, [windowWidth]);

  return !currentUser ? (
    <Loader />
  ) : (
    <div className="bg-c1 flex h-[100vh]">
      <div className="flex flex-col sm:flex-row w-full shrink-0">
        <LeftNav />
        <div className="flex bg-c2 grow">
          <div className=" w-full sm:w-[400px] p-5  shrink-0 border-r border-white/[0.05]">
            <div className="flex flex-col h-full">
               <Chats/>
            </div>
          </div>
          
          {data.user && width>=640 && <Chat/> }
        </div>

      </div>
    </div>
  );
};

export default Home;
