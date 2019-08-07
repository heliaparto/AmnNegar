import { connect } from 'react-redux'
import ChatScreen from '../componants/chat/EachChatInList'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

const mapStateToProps = state =>{
    console.log(state)
    return {
        newMessage: state.newMessage,
        messages: state.messages
    }
}


const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatScreen)

export default ChatContainer