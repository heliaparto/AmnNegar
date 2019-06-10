import React from 'react'
import './App.css'
import './styles/App_mobile.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/landingPage'
import ContactUs from './components/ContactUs'
import CommingSoon from './components/ComingSoon'
import News from './components/NewsPage'
import ResourcesPage from './components/ResourcesPage'
import Character from './components/ShakhsiatShenasi'
import Intro from './components/introduction'


export default class App extends React.Component {

  render () {
    console.log('hey')
    return (
        <Router>
            <Route exact path='/' component={Landing} />
            <Route path='/contactUs' component={ContactUs} />
            <Route path='/underconstruction' component={CommingSoon} />
            <Route path='/references' component={ResourcesPage} />
            <Route path='/news' component={News} />
            <Route path='/CharacterAnalysis' component={Character} />
            <Route path='/Introduction' component={Intro} />



        </Router>

    )
  }
}