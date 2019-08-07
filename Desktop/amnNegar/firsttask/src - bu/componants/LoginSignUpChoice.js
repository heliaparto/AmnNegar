import React from 'react'
import './App.css'
import Login from './componants/Login_Signup.js'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'

export default class Choice extends React.Component {
    render () {
        return (
            <Router>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={} />
            </Router>

        )
    }
}