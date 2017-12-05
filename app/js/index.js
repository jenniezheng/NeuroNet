import React from 'react';
import ReactDOM from 'react-dom';
import Sandbox from './components/sandbox';
import Credits from './components/credits';
import MyNavBar from './components/navbar';
import MachineLearning from './components/machinelearning';
import {Intro0, Intro1} from './components/software2p0';
import Regularization from './components/regularization';
import Activation from './components/activation';
import Conclusion from './components/conclusion';
import ActivationGraphical from './components/activationGraphical';
import Types from './components/types';
import {Link, Switch, Route, HashRouter as Router } from 'react-router-dom'

class ChapterWrapper extends React.Component {
  render(){
    return (
        <div><MyNavBar />
      <div className='chapterwrapper'>{this.props.children}</div>
        </div>
    )
  }
}

class Application extends React.Component {
 render(){
    return <Switch>
      <Route exact path='/' render={() =>  <ChapterWrapper><Intro0/></ChapterWrapper> }/>
      <Route path='/Credits' render={() =>  <ChapterWrapper><Credits/></ChapterWrapper> }/>
      <Route path='/Sandbox' render={() => <ChapterWrapper><Sandbox/></ChapterWrapper> }/>
      <Route path='/Regularization' render={() => <ChapterWrapper><Regularization/></ChapterWrapper> }/>
      <Route path='/MachineLearning' render={() => <ChapterWrapper><MachineLearning/></ChapterWrapper> }/>
      <Route path='/Types' render={() => <ChapterWrapper><Types/></ChapterWrapper> }/>
      <Route path='/Intro' render={() => <ChapterWrapper><Intro0/></ChapterWrapper> }/>
      <Route path='/Intro1' render={() => <ChapterWrapper><Intro1/></ChapterWrapper> }/>
      <Route path='/Activation' render={() => <ChapterWrapper><Activation/><ActivationGraphical/></ChapterWrapper> }/>
      <Route path='/Conclusion' render={() => <ChapterWrapper><Conclusion/></ChapterWrapper> }/>
    </Switch>
  }
}


ReactDOM.render(<Router><Application /></Router>, document.getElementById('root'));