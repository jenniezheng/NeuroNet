import React from 'react';
import {
  Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle,
  Row, Col
} from 'reactstrap';


/*Todo: Sandbox Projects*/
class Project{
  constructor({name='no name',
              desc='no desc',
               url='#',
               author='no author',
              img='https://images.unsplash.com/photo-1472345113808-03a78a564cc5?dpr=1&auto=compress,format&fit=crop&w=1353&h=&q=80&cs=tinysrgb&crop='}) {
    this.desc=desc;
    this.name=name;
    this.url=url;
    this.img=img;
    this.author=author;
  }
}

const ex_project=new Project({
  name:'Example',
  desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
})

const projects=[ex_project,ex_project,ex_project,ex_project]


export default class Sandbox extends React.Component {
  render(){
    return (
      <div>
        <h3>Additional visualization tools!</h3>
        <Row>
         { projects.map(function(project, index){
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