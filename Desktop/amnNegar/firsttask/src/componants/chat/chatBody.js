import React from 'react'
import '../../styles/chat.css'
import ChatList from '../../container/conversationListContainer.js'
import ChatScreen from '../../container/wholeChatContainer'


export default class ChatBody extends React.Component {
    render () {
        return (
            <div className='Container_chat_body'>
                <div className='chatList'>

                    <ChatList />

                </div>
                <div className='chatPart'>
                    <ChatScreen />
                </div>
            </div>
        )
    }
}
