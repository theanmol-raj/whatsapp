import React, { useState } from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { collection, addDoc } from "firebase/firestore"; 

function ChatInput({db,user ,...props}) {


  const schema = {
    myMessage : "",
    uid : user?.uid ,
    img:user?.photoURL ,
    displayName : user?.displayName
  }
  const [message , setMessage] = useState(schema)

  function handleChange(event){
    const value = event.target.value ;
    // const name = event.target.name ;
    // const {value} = event.target ;
    let tempobj = message ;
    tempobj["myMessage"] =  value ;
    setMessage(tempobj)


    // setMessage(prev => ({...prev,[name]:value}))
    

  }
 async function postMessage(){
  await addDoc(collection(db, "grpMSG"), message);

 }  


  return (
    <div className="flex items-center text-gray-200 py-2 px-4 space-x-2  bg-slate-700">
      <div className=" flex space-x-3 ">
        <TagFacesIcon /> <AttachFileIcon className="rotate-45" />
      </div>
      <input
        name="myMessage"
        value={message.myMessage}
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
