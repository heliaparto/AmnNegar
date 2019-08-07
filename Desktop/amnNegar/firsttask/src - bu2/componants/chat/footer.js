import React from 'react'
import send from '../../images/send.png'
import { addNewMessage } from '../../action/conversation'
import axios from "axios";

export default class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            newMessage : '',
        }
    }

    onChangeText(e) {
        this.setState({newMessage: e.target.value})

    }

    sendNewMessage() {
        console.log('id:::::',this.props.conversationId)
        console.log('message:::::',this.state.newMessage)

        let token = window.localStorage.getItem('token')
        let fdata = new FormData()

        fdata.append('token',token)
        fdata.append('text',this.state.newMessage)
        fdata.append('conversation_id',this.props.conversationId)

        axios.post('https://api.paywith.click/conversation/create/', fdata)
            .then((response) => {
                console.log('response::::',response);
                this.setState({newMessage:''})
            })
            .catch((error) => {
                console.log('error::::',error);
            });
    }

    render () {
        console.log('props', this.props)
        return (
            <div className='footer'>
                <input
                    className='messageInput'
                    placeholder='write a message...'
                    value = {this.state.newMessage}
                    onChange = {(e) => this.onChangeText(e)} />
                <img
                    className='sendIcon'
                    src={send}
                    onClick={() => this.sendNewMessage()}
                    style={{width: '20px', cursor: 'pointer'}} />
            </div>
        )
    }
}