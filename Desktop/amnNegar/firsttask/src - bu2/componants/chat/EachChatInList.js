import React from 'react'
import '../../styles/chat.css'
import userImage from '../../images/user.png'
import axios from "axios";
import {saveMessages} from '../../action/conversation'

var ScrollArea = require('react-scrollbar');

export default class Conversation extends React.Component {

    handleClick(e){
        console.log('hmmmmmm:::::',this.props)
        let token = window.localStorage.getItem('token')
        let fdata = new FormData()
        let date=Math.ceil(new Date().getTime()/1000)
        fdata.append('token',token)
        fdata.append('size', 10)
        fdata.append('date',date)
        fdata.append('conversation_id',this.props.conversationId)

        axios.post('https://api.paywith.click/conversation/details/', fdata)
            .then((response) => {
                console.log('response::::',response);
                this.props.dispatch(saveMessages(
                    response.data.data.messages,
                    this.props.name,
                    this.props.avatar,
                    this.props.conversationId
                ))

            })
            .catch((error) => {
                console.log('error::::',error);
            });
    }
    render () {
        return (
            <div onClick={(e)=>this.handleClick(e)}
                className='EachChatInList'>
                <div>
                    <img className='profileImageInList' src={this.props.avatar} />
                </div>

                <div className='Text_display_in_list'>
                    <div>{/* the first part */}
                        <span className='name_in_chat_list'>{this.props.name}</span>{/* //name */}
                        <span>{this.props.date}</span>{/* //date */}
                    </div>
                    <div>{/* the second part */}
                        <span> {this.props.latestMessage} </span>{/* latestmessage */}
                    </div>
                </div>
                <div>
                    <span className='unseenMessages'>4</span>{/* unread messages */}
                </div>
            </div>

        )
    }
}
