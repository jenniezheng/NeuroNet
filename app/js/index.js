import React from 'react';
import ReactDOM from 'react-dom';
import MyNavBar from './components/navbar';
import {MachineLearning0, MachineLearning1,MachineLearning2}  from './components/machinelearning';
import {Regularization0, Regularization1,Regularization2}  from './components/regularization';
import {Type0, Type1,Type2,Type3,Typen1}  from './components/types';
import {Intro0, Intro1} from './components/software2p0';
import {Activation0,Activation1} from './components/activation'
import Conclusion from './components/conclusion'
import {Link, Switch, Route, HashRouter as Router } from 'react-router-dom'
import Credits from './components/credits'
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
      <Route path='/Regularization' render={() => <ChapterWrapper><Regularization0/></ChapterWrapper> }/>
      <Route path='/Regularization1' render={() => <ChapterWrapper><Regularization1/></ChapterWrapper> }/>
      <Route path='/Regularization2' render={() => <ChapterWrapper><Regularization2/></ChapterWrapper> }/>
      <Route path='/MachineLearning' render={() => <ChapterWrapper><MachineLearning0/></ChapterWrapper> }/>
      <Route path='/MachineLearning1' render={() => <ChapterWrapper><MachineLearning1/></ChapterWrapper> }/>
      <Route path='/MachineLearning2' render={() => <ChapterWrapper><MachineLearning2/></ChapterWrapper> }/>
      <Route path='/ActivationFunctions' render={() => <ChapterWrapper><Activation0/></ChapterWrapper> }/>
      <Route path='/ActivationFunctions1' render={() => <ChapterWrapper><Activation1/></ChapterWrapper> }/>
      <Route path='/Types' render={() => <ChapterWrapper><Typen1/></ChapterWrapper> }/>
      <Route path='/Types' render={() => <ChapterWrapper><Typen1/></ChapterWrapper> }/>
      <Route path='/Types0' render={() => <ChapterWrapper><Type0/></ChapterWrapper> }/>
      <Route path='/Types1' render={() => <ChapterWrapper><Type1/></ChapterWrapper> }/>
      <Route path='/Types2' render={() => <ChapterWrapper><Type2/></ChapterWrapper> }/>
      <Route path='/Types3' render={() => <ChapterWrapper><Type3/></ChapterWrapper> }/>
      <Route path='/Intro' render={() => <ChapterWrapper><Intro0/></ChapterWrapper> }/>
      <Route path='/Intro1' render={() => <ChapterWrapper><Intro1/></ChapterWrapper> }/>
      <Route path='/Credits' render={() => <ChapterWrapper><Credits/></ChapterWrapper> }/>
      <Route path='/Conclusion' render={() => <ChapterWrapper><Conclusion/></ChapterWrapper> }/>
       </Switch>
  }
}


ReactDOM.render(<Router><Application /></Router>, document.getElementById('root'));