import React from 'react';
import ReactDOM from 'react-dom';
import Sandbox from './components/sandbox';
import Credits from './components/credits';
import MyNavBar from './components/navbar';
import MachineLearning from './components/machinelearning';
import Intro from './components/software2p0';
import Regularization from './components/regularization';
import Activation from './components/activation';
import ActivationGraphical from './components/activationGraphical';
import Types from './components/types';

class ChapterWrapper extends React.Component {
  render(){
    return (
      <div className='chapterwrapper'>{this.props.children}</div>
    )
  }
}

class Application extends React.Component {
  constructor() {
    super()
    this.state = {
      chapter: 'Credits'
    }
  }

  changeChapter(chapter) {
    this.setState({
      chapter: chapter
    })
  }

 render(){
    let main=<div></div>
   switch(this.state.chapter){
    case 'Credits':
        main=<Credits/>
        break
     case 'Sandbox':
        main=<Sandbox/>
        break
    case 'Intro':
        main=<Intro/>
        break
    case 'Regularization':
        main=<Regularization/>
        break
    case 'Machine Learning':
        main=<MachineLearning/>
        break
    case 'Activation Functions':
        main=<div><Activation/><ActivationGraphical/></div>
        break
    case 'Types':
        main=<Types/>
        break
    default:
        main=<div><h1>TODO: {this.state.chapter}</h1></div>
  }

    return <div><MyNavBar cb={this.changeChapter.bind(this)}/>
      <ChapterWrapper>{main}</ChapterWrapper>
    </div>
 }
}


ReactDOM.render(<Application />, document.getElementById('root'));