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
    const {name ,value} =  event.target ;
    // setMessage(function(cm){
    //   return ({
    //     ...cm , [name] : value
    //   })

    // })
    setMessage(cm =>({...cm , [name] : value}))


    // setMessage(prev => ({...prev,[name]:value}))
    

  }



  
 async function postMessage(){
  if(message.myMessage === "") return ;
  // console.log(message)
  await addDoc(collection(db, "grpMSG"), message);
  setMessage(schema);

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
      <button onClick={()=>postMessage()} className=" bg-gradient-to-br from-purple-500 to-yellow-500 px-4 py-2 rounded-full">Send</button>
      <div className="pr-2">
        <MicIcon className="mt-3 " />
      </div>
    </div>
  );
}

export default ChatInput;
