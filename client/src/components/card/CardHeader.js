import React from 'react';
import './Card.css';


class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} id={image} className="card-header">
          <h4 className="card-header-title">{this.props.term}</h4>
        </header>
      )
    }
  }
  

export default CardHeader;
