import React from 'react';

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
  name:'Intro'
})

const ch_machinglearning=new Chapter({
  name:'Machine Learning'
})

const ch_activation=new Chapter({
  name:'Activation Functions'
})


const ch_regularization=new Chapter({
  name:'Regularization'
})

const ch_types=new Chapter({
  name:'Types'
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

const chapters=[ch_intro,ch_machinglearning,ch_activation,ch_regularization,ch_types,ch_sandbox,ch_conclusion,ch_credits]


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

  changeChapter(name){
    this.props.cb(this.props.name)
  }

  render() {
    return (
      <div>
      <i onClick={this.changeChapter.bind(this)} className={'fa  '+this.props.icon} aria-hidden="true" id={'nav'+this.props.index}></i>
        <Tooltip placement="down" isOpen={this.state.tooltipOpen} target={'nav'+this.props.index} toggle={this.toggle} className='mytip'>
          {this.props.desc}
        </Tooltip>
      </div>
    );
  }
}

export default class MyNavBar extends React.Component {
  changeChapter(num){
    this.props.cb(num);
  }

  render() {
    let cb=this.changeChapter.bind(this)
    return (
      <div id='mynavbar'>
        <div><h2>NEURONET</h2></div>
      <Nav id='chapters'>
        { chapters.map(function(chapter, index){
            return <NavItem >
          <NavLink href="#" > <NavDescription index={index}
                               desc={chapter.desc}
                                name={chapter.name}
                                icon={chapter.icon}
                                key={index}
                                cb={cb} />
              </NavLink>
              </NavItem>
          }) }
      </Nav>
        <div><a href='https://github.com/jenniezheng321/NeuroNet'><i className="fa fa-github-alt" aria-hidden="true"></i></a></div>
        </div>
    );
  }
}
