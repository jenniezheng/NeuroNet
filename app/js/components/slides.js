import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class Next extends React.Component {
  render() {
return (
     <Link className='next' to={'/'+this.props.name} ><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
    );
  }
}


class Prev extends React.Component {
  render() {
return (
     <Link className='prev' to={'/'+this.props.name} ><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
    );
  }
}



module.exports = {
    Next,
    Prev
}
