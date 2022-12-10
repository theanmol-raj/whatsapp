import React from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

function ChatInput() {
  return (
    <div className="flex ml-2 space-x-2  bg-slate-700">
      <div className="mt-4 flex space-x-3 ">
        <TagFacesIcon /> <AttachFileIcon className="rotate-45" />
      </div>
      <input
        placeholder="Type a Message"
        className="bg-slate-500 text-lg pl-2 rounded-lg mt-3 h-10 w-full"
      ></input>

      <div className="pr-2">
        <MicIcon className="mt-3 " />
      </div>
    </div>
  );
}

export default ChatInput;
