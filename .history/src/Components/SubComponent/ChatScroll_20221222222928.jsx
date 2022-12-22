import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from "firebase/firestore";


function Message({data ,me}){

    return (<div>
        {me ? <div className=' w-full max-h-max  flex justify-end'>
            <div className=' max-w-max rounded-br-none px-4 py-2 rounded-lg bg-slate-800 text-gray-200'>
            <p>{data.myMessage}</p>
        </div>
        </div> : <div className='flex'>
        <img src={data.img} className="rounded-full h-6 w-6" />
        <div className=' max-h-max max-w-max px-4 py-2 rounded-bl-none rounded-lg bg-white text-gray-800'>
        <p className=' text-xs text-red-600'>{data.displayName}</p>
        <p>{data.myMessage}</p>
        </div>
        </div>}
    </div>)

}


function ChatScroll({user,db,...props}) {
    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        onSnapshot(collection(db, "grpMSG"), (querySnapshot) => {
        const tempMessageArr = [];
        querySnapshot.forEach((doc) => {
            tempMessageArr.push(doc.data());
        });
        setMessages(tempMessageArr);

        });
    },[db])


    console.log(messages)
  
    

  return (
    <div className=' flex flex-col h-full '>
        
        <div className='w-full py-16 px-8 flex flex-col justify-end space-y-3 '>
        <div className=' h-[45rem] xl:h-[50rem] ' />
        {messages.map((message ,index) => <Message me={message.uid === user.uid} data={message} key={index}  />)}
        {/* <Message text="Hello" me={true} /> */}
         
</div>
    </div>
  )
}

export default ChatScroll