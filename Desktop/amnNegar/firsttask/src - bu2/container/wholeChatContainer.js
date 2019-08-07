import { connect } from 'react-redux'
import ChatScreen from '../componants/chat/ChatScreen'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

const mapStateToProps = state =>{
    console.log(state)
    return {
        newMessage: state.newMessage,
        messages: state.messages,
        user:state.user,
        avatar:state.avatar
    }
}


const WholeChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatScreen)

export default WholeChatContainer