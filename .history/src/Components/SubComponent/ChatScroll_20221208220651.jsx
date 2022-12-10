import React from 'react'


function Message(props){
    return (<div>
        {props.me ? <div className=' rounded-lg bg-slate-800 text-gray-200'>
            <p>{props.text}</p>
        </div> : <div className=' rounded-lg bg-white text-gray-800'>

        </div>}
    </div>)

}


function ChatScroll() {
  return (
    <div className='w-full py-16 px-8 grid grid-cols-1 h-full'>
        <Message text="Hello" me={true} />
        <Message text="" me={false} />
        <Message text="" me={false} />
        <Message text="" me={true} />
        <Message text="" me={false} />
    <div className=' h-16' />
</div>
  )
}

export default ChatScroll