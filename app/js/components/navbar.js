import React from 'react';
import { Link } from 'react-router-dom'

import {
  Tooltip,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Navbar,
  Nav
} from 'reactstrap';

class Chapter{
  constructor({name='no name',
               icon='fa-circle-o',
              desc=''}) {
    if(desc!='') this.desc=desc;
    else this.desc=name;
    this.name=name;
    this.icon=icon;
  }
}
/*
Todo:
pick icons for each chapter
reword each chapter
*/
const ch_intro=new Chapter({
  name:'Intro',
  desc:'Introduction'
})

const ch_machinglearning=new Chapter({
  name:'MachineLearning',
  desc:'Machine Learning'
})

const ch_activation=new Chapter({
  name:'ActivationFunctions',
  desc:'Activation Functions'
})


const ch_regularization=new Chapter({
  name:'Regularization'
})

const ch_types=new Chapter({
  name:'Types',
  desc:'Neural Network Architectures'
})

const ch_sandbox=new Chapter({
  name:'Sandbox'
})

const ch_conclusion=new Chapter({
  name:'Conclusion'
})

const ch_credits=new Chapter({
  name:'Credits'
})

const chapters=[ch_intro,ch_machinglearning,ch_types,ch_activation,ch_regularization,ch_conclusion]

class NavDescription extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
      <i  className={'fa  '+this.props.icon} aria-hidden="true" id={'nav'+this.props.index}></i>
        <Tooltip placement="down" isOpen={this.state.tooltipOpen} target={'nav'+this.props.index} toggle={this.toggle} className='mytip'>
          {this.props.desc}
        </Tooltip>
      </div>
    );
  }
}

export default class MyNavBar extends React.Component {

  render() {
    return (
      <div id='mynavbar'>
        <div><h2>NEURONET</h2></div>
      <Nav id='chapters'>
        { chapters.map(function(chapter, index){
            return <NavItem >
            <NavLink>
          <Link to={'/'+chapter.name} > <NavDescription index={index}
                               desc={chapter.desc}
                                name={chapter.name}
                                icon={chapter.icon}
                                key={index}/>
              </Link>
              </NavLink>
              </NavItem>
          }) }
      </Nav>
        <div><a href='https://github.com/jenniezheng321/NeuroNet'><i className="fa fa-github-alt" aria-hidden="true"></i></a></div>
        </div>
    );
  }
}
