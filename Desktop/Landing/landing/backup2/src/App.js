import React from 'react'
import './App.css'
import './styles/App_mobile.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/landingPage'



export default class App extends React.Component {

  render () {
    console.log('hey')
    return (
        <div>
          <Landing/>

        </div>

    )
  }
}