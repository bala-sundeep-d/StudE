import React from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';  
import CourseContent from '../CourseContent/CourseContent';
import {Redirect} from 'react-router-dom';
  
  
  class Card extends React.Component {
    constructor() {
        super();
    
        this.state = {
          clicked: false
        };
    
        this.handleClick = this.handleClick.bind(this);
      } 
    
      handleClick() {
        this.setState({
          clicked: true
          
        });
      }
      
    render() {
        
      return (
        <article className="card" onClick={this.handleClick}>            
          <CardHeader term={this.props.term} image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={this.props.title}/>
          {this.state.clicked ? <Redirect push
            to={{
            pathname: "/course",
            state: { course: this.props.title }
          }}
        /> : null}
        </article>
      )
    }
  }

export default Card;
