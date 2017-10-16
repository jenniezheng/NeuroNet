import Data from '../data/_textdata';

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

class Sandbox extends React.Component {
  render(){
    return (
      <div>
        <h3>Additional visualization tools!</h3>
        <Row>
         { Data.projects.map(function(project, index){
            return  (
              <Col sm="6">
               <Card body>
                 <a href={project.url}> 
                   <CardImg top src={project.img} alt="Card image cap" />
                 </a>
          <CardTitle>{project.name}</CardTitle>
         <CardSubtitle>Created by {project.author}</CardSubtitle>
          <CardText>{project.desc}.</CardText>
        </Card>
      </Col>
              )
          }) }
    </Row>
        </div>
      )
  }
}

class Credits extends React.Component {
  render(){
    return (
      <div id='credits'>
      <h1>Code</h1>
         {
          Data.credits.code.map(function(line){
            return (<h3>{line}</h3>)
          }) 
        }
      <h1>Lessons</h1>
        {
          Data.credits.lesson.map(function(line){
            return (<h3>{line}</h3>)
          }) 
        }
      <h1>Design</h1>
        {
          Data.credits.design.map(function(line){
            return (<h3>{line}</h3>)
          }) 
        }
        </div>
    )
  }
}

const ChapterComponents = {
  Sandbox : Sandbox,
  Credits : Credits
}

export default ChapterComponents