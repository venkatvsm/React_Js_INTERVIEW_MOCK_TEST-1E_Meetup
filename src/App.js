import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './cortex/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegister: false,
    name: '',
    currentTopicId: 'ARTS_AND_CULTURE',
    topic: 'Arts and Culture',
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topicId => {
    console.log(topicId)
    this.setState({currentTopicId:topicId.id, topic: topicId.displayText })
  }

  updateError = error => {
    this.setState({showError: error})
  }

  registerName = () => {
    this.setState({isRegister: true})
  }

  render() {
    const {isRegister, name, showError, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegister,
          topic,
          name,
          showError,
          updateError: this.updateError,
          changeTopic: this.changeTopic,
          changeName: this.changeName,
          registerName: this.registerName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
