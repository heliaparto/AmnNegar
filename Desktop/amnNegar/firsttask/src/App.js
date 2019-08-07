import React from 'react'
import './App.css'
import './styles/chat.css'
import Login_signUp from './componants/Login_Signup.js'
import signUpPage from './componants/signupPage.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Chat from "./componants/chat/chatBody";
import {Provider} from "react-redux";
import {createStore} from 'redux'
import conversation from './reducer/conversation'

const store=createStore(conversation)
export default class App extends React.Component {
    render () {
        return (
            <Provider store = {store}>
                <Router>
                    <Route exact path='/' component={Login_signUp} />
                    <Route path='/signUp' component={signUpPage} />
                    <Route path='/chat' component={Chat} />

                </Router>
            </Provider>

        )
    }
}