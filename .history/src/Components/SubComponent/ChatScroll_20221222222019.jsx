import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from "firebase/firestore";


function Message(props){
    return (<div>
        {props.me ? <div className=' w-full max-h-max  flex justify-end'>
            <div className=' max-w-max rounded-br-none px-4 py-2 rounded-lg bg-slate-800 text-gray-200'>
            <p>{props.text}</p>
        </div>
        </div> : <div className=' max-h-max max-w-max px-4 py-2 rounded-bl-none rounded-lg bg-white text-gray-800'>
        <p>{props.text}</p>
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
        {}
        <Message text="Hello" me={true} />
        <Message text="Hi" me={false} />
        <Message text="How are you ?" me={false} />
        <Message text="I am fine. Wbu ?" me={true} />
        <Message text="Mee too" me={false} />
        <Message text="Hello" me={true} />
        <Message text="Hi" me={false} />
        <Message text="How are you ?" me={false} />
        <Message text="I am fine. Wbu ?" me={true} />
        <Message text="Mee too" me={false} />
        <Message text="Hello" me={true} />
        <Message text="Hi" me={false} />
        <Message text="How are you ?" me={false} />
        <Message text="I am fine. Wbu ?" me={true} />
        <Message text="Mee too" me={false} />
        <Message text="Hello" me={true} />
        <Message text="Hi" me={false} />
        <Message text="How are you ?" me={false} />
        <Message text="I am fine. Wbu ?" me={true} />
        <Message text="Mee too" me={false} /> 
</div>
    </div>
  )
}

export default ChatScroll