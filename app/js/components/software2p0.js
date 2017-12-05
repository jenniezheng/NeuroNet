import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class Intro0 extends React.Component {
  render() {
    return (
        <div className='software2p0'>
          <div>
          <p>
         A <span className='font-weight-bold'> neural network</span> is a collection of computer programmed “neurons” that work together to produce a result. Neural networks represent a new programming paradigm, coined Software 2.0 by AI researcher Andrej Karpathy.

        <br/>
        Traditional programming “Software 1.0” involves a programmer writing a program to try to reach a result. Meanwhile, “Software 2.0” involes a programmer letting the program design itself to reach a result.
        </p>
          </div>
    <Container className='software2p0_caption'>
        <Row>
          <Col> <div>
                    <h4>TRADITIONAL PROGRAMMING</h4>
                    <img src='../../images/software2p01.svg'></img>
          </div> </Col>
          <Col> <div>
                    <h4>NEURAL NETWORK</h4>
                     <img src='../../images/software2p02.svg'></img>
          </div> </Col>
        </Row>
      </Container>
      <Link className='next' to='Intro1'><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
      </div>
    );
  }
}


class Intro1 extends React.Component {
  render() {
    return (
        <div className='software2p0'>

           <div>
           <p>
         Software 1.0 programs consist of explicit instructions written in computer code by a programmer that do not react to their accuracy of producing a desirable result. Meanwhile Software 2.0 programs consist of neural networks that are programmed to constantly change their programming to increase their accuracy of producing a desirable result.
          </p>
          </div>

            <Container className='software2p0_caption'>
        <Row>
          <Col sm="6"> <div>
                    <h4>TRADITIONAL PROGRAMMING</h4>
                    <img src='../../images/software2p03.svg'></img>
          </div> </Col>
          <Col sm="6"> <div>
                    <h4>NEURAL NETWORK</h4>
                     <img src='../../images/software2p04.svg'></img>
          </div> </Col>
          <Col sm="6"> <div>
                    <h4>accuracy of program:</h4>
                    <img src='../../images/software2p05.svg'></img>
          </div> </Col>
          <Col sm="6"> <div>
                    <h4>accuracy of program:</h4>
                     <img src='../../images/software2p06.svg'></img>
          </div> </Col>
        </Row>
      </Container>

      <Link className='next' to='Intro2'><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
      </div>
    );
  }
}


class Intro2 extends React.Component {
  render() {
    return (
        <div className='software2p0'>

           <div>
           <p>
         Software 1.0 programs consist of explicit instructions written in computer code by a programmer that do not react to their accuracy of producing a desirable result. Meanwhile Software 2.0 programs consist of neural networks that are programmed to constantly change their programming to increase their accuracy of producing a desirable result.
          </p>
          </div>

            <Container className='software2p0_caption'>
        <Row>
          <Col sm="6"> <div>
                    <h4>TRADITIONAL PROGRAMMING</h4>
                    <img src='../../images/software2p03.svg'></img>
          </div> </Col>
          <Col sm="6"> <div>
                    <h4>NEURAL NETWORK</h4>
                     <img src='../../images/software2p04.svg'></img>
          </div> </Col>
          <Col sm="6"> <div>
                    <h4>accuracy of program:</h4>
                    <img src='../../images/software2p05.svg'></img>
          </div> </Col>
          <Col sm="6"> <div>
                    <h4>accuracy of program:</h4>
                     <img src='../../images/software2p06.svg'></img>
          </div> </Col>
        </Row>
      </Container>

      <button>
      <Link className='next' to='Intro2'></Link></button>
      </div>
    );
  }
}

module.exports = {
    Intro0,
    Intro1,
    Intro2
}
