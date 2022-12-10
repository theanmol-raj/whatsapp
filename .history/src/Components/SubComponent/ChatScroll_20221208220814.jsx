import React from 'react'


function Message(props){
    return (<div>
        {props.me ? <div className=' px-2 py-1 rounded-lg bg-slate-800 text-gray-200'>
            <p>{props.text}</p>
        </div> : <div className=' rounded-lg bg-white text-gray-800'>

        </div>}
    </div>)

}


function ChatScroll() {
  return (
    <div className='w-full py-16 px-8 grid gap-1 grid-cols-1 h-full'>
        <Message text="Hello" me={true} />
        <Message text="Hi" me={false} />
        <Message text="How are you ?" me={false} />
        <Message text="I am fine. Wbu ?" me={true} />
        <Message text="Mee too" me={false} />
    <div className=' h-16' />
</div>
  )
}

export default ChatScroll