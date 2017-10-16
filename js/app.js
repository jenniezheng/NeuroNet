import Data from './data/_textdata';
import ChapterComponents from './components/_chaptercomponents';

const {
  Button, 
  Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle,
  Col, Container, Dropdown, DropdownItem, DropdownMenu,
  DropdownToggle,
  Row,
  Input,
  Tooltip,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Navbar,
  Nav
} = Reactstrap;


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

class MyNavBar extends React.Component {
  changeChapter(num){
    this.props.cb(num);
  }
  
  render() {
    let cb=this.changeChapter.bind(this)
    return (
      <div id='mynavbar'>
        <div><h1>NNet</h1></div>
      <Nav id='chapters'>
        { Data.chapters.map(function(chapter, index){
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
        main=<ChapterComponents.Credits/>
        break;
     case 'Sandbox':
        main=<ChapterComponents.Sandbox/>
        break;
    default:
        main=<div><h1>TODO: {this.state.chapter}</h1></div>
  }
    
    return <div><MyNavBar cb={this.changeChapter.bind(this)}/> 
      <ChapterWrapper>{main}</ChapterWrapper>
    </div>
 }
}


ReactDOM.render(<Application />, document.getElementById('app'));