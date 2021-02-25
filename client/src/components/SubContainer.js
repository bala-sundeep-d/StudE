import React from 'react';
import './MainContainer/MainContainer.css';
import Card from './Card/Card'


const MainContainer = () => {

  const modules = [
    { title: 'Chapter 1' },
    { title: 'Chapter 2' },
    { title: 'Chapter 3' },
    { title: 'Chapter 4' },
    { title: 'Chapter 5' },
    { title: 'Chapter 6' },
  ]
  return (
    <div className="MainContainer">
        {
          modules.map((subject, index) => <Card static={true} key={index} title={subject.title}/>)
        }
    </div>
 );
}

export default MainContainer;
