import React, { useState } from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

function ChatInput(props) {
  // console.log(props.msgSetter)

  const schema = {
    uid : `arfat1234` ,
    xyz : "",
  }
  const [text , setText] = useState(schema)

  function handleChange(event){
    // setText



    const {value} = event.target ;
    console.log(value)

    setText({uid : `12345` , myMessage : value})
    console.log(text)

  }

  return (
    <div className="flex items-center text-gray-200 py-2 px-4 space-x-2  bg-slate-700">
      <div className=" flex space-x-3 ">
        <TagFacesIcon /> <AttachFileIcon className="rotate-45" />
      </div>
      <input
        name="myMessage"
        value={text.myMessage}
        onChange={handleChange}
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
