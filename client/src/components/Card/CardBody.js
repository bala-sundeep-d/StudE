import React from 'react';
import './Card.css';

class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">

          <h3>{this.props.title}</h3>          
         
        </div>
      )
    }
  }

export default CardBody;
