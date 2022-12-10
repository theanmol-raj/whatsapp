import React from 'react'


function Message(props){
    return (<div>
        {props.me ? <div></div> : <div>

        </div>}
    </div>)

}


function ChatScroll() {
  return (
    <div className='w-full py-16 px-8 grid grid-cols-1 h-full'>
        <Message text="" me={true} />
        <Message text="" me={false} />
        <Message text="" me={false} />
        <Message text="" me={true} />
        <Message text="" me={false} />
    <div className=' h-16' />
</div>
  )
}

export default ChatScroll