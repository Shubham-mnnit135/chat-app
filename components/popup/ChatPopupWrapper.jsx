import React from "react";
import { IoClose } from "react-icons/io5";
import Icon from "../Icon";

const ChatPopupWrapper = (props) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-[100%] h-full flex items-center justify-center">
      <div
        className="w-full h-full absolute glass-effect"
        onClick={props.onHide}
      ></div>
      <div
        className={`flex flex-col w-full h-full sm:max-h-[80%] bg-c2 relative z-10  ${
          props.shortHeight ? "" : "min-h-[600px]"
        }`}
      >
        {!props.noHeader && (
          <div className="shrink-0 p-6 flex items-center justify-between">
            <Icon
              size="small"
              icon={<IoClose size={20} />}
              onClick={props.onHide}
            />
          </div>
        )}

        <div className="grow flex flex-col  p-6 pt-0 overflow-auto scrollbar ">{props.children}</div>
      </div>
    </div>
  );
};

export default ChatPopupWrapper;
