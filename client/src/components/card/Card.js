import React, { useState } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import {Route, Switch,BrowserRouter as Router, Redirect, useLocation} from 'react-router-dom';
// import Subject from '../modules';
  
const Card = (props) => {

  const location = useLocation();
  const [clicked, handleClick] = useState(false);
  return (
    <article className="card" onClick={() => handleClick(true)}>            
      <CardHeader term={props.term} image={'https://source.unsplash.com/user/erondu/600x400'}/>
      <CardBody title={props.title}/>
      {(clicked && !props.static) ? <Redirect push
        to={{
        pathname: `${location.pathname}/${props.subjectId}`,
        state: { course: props.title, cid:props.subjectId }
      }}
    /> : null}
    </article>
  );
}

export default Card;
