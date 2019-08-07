import React from 'react'
import '../../styles/chat.css'
import MainScreen from '../../container/chatScreenContainer'
import userImage from '../../images/user.png'
import send from '../../images/send.png'
import axios from "axios";
import FooterContainer from '../../container/FooterContainer'


export default class ChatScreen extends React.Component {

    render () {
        return (
            <div className='whole_Chat_Screen'>
                <div className='profilePart'>
                    <div>
                        <img src={this.props.avatar} className='profileImageInChatPage' />
                    </div>
                    <div className='profile_Name'>
                        <span>{this.props.user}</span>
                    </div>
                </div>

                <div className='mainPart'>

                    <MainScreen/>
                </div>

                <div className='sendPart'>
                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        placeholder='write a message'*/}
                    {/*        className='messageInput'onChange={(e)=>this.handleChange}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <img onClick={(e)=>this.handleClick(e)}*/}
                            {/*        src={send} className='sendIcon' />*/}
                    {/*</div>*/}
                    <FooterContainer/>

                </div>
            </div>
        )
    }
}
