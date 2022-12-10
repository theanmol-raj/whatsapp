import React from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

function ChatInput(props) {
  console.log(props)

  return (
    <div className="flex items-center text-gray-200 py-2 px-4 space-x-2  bg-slate-700">
      <div className=" flex space-x-3 ">
        <TagFacesIcon /> <AttachFileIcon className="rotate-45" />
      </div>
      <input
        placeholder="Type a Message"
        className="bg-slate-600 px-4 py-1 text-sm  rounded-md   w-full"
      />

      <div className="pr-2">
        <MicIcon className="mt-3 " />
      </div>
    </div>
  );
}

export default ChatInput;
