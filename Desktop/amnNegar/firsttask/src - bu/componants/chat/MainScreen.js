import React from 'react'
import '../../styles/chat.css'

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myId:window.localStorage.getItem('id'),
            messages : []


        }
    }
    render() {
        console.log('myid:::::::::::::::::',window.localStorage.getItem('id'))
        return(
            <div className='screen'>

                {this.props.messages.map( (item, index) => {
                    console.log('aaaaaaaaaaa', item.sender.id,this.state.myId)
                        if(item.sender.id == this.state.myId) {
                            return(
                                <div className='sender'>
                                    <span className = 'message'>{item.text}</span>
                                </div>
                            )
                        } else {
                            return(
                                <div className='receiver'>
                                    <span className = 'message'>{item.text}</span>
                                </div>
                            )
                        }

                    }

                )

                }
                {/* <div className='receiver'>
          <span className = 'message'>salammm</span>
        </div> */}

                {/* <div className='sender'>
          <span className = 'message'>{this.props.newMessage}</span>
        </div>  */}
            </div>
        )
    }
}