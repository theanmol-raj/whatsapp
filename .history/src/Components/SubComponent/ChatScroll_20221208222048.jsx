import React from 'react'


function Message(props){
    return (<div>
        {props.me ? <div className=' w-full  flex justify-end'>
            <div className=' max-w-max rounded-br-none px-4 py-2 rounded-lg bg-slate-800 text-gray-200'>
            <p>{props.text}</p>
        </div>
        </div> : <div className=' max-w-max px-4 py-2 rounded-bl-none rounded-lg bg-white text-gray-800'>
        <p>{props.text}</p>
        </div>}
    </div>)

}


function ChatScroll() {
  return (
    <div className='w-full py-16 px-8 flex space-y-3 justify-end flex-col h-full'>
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
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
    <div className=' h-16' />
</div>
  )
}

export default ChatScroll