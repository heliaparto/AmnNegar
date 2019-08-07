import { connect } from 'react-redux'
import Footer from '../componants/chat/footer'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

const mapStateToProps = state =>{
    console.log(state)
    return {
        conversationId:state.conversationId,
    }
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer