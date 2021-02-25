import React from 'react';
import './MainContainer.css';
import Card from '../Card/Card';
import { Container, Row, Col } from 'react-bootstrap';

import ParentView from '../parent-view/parentview.component';

const MainContainer = (props) => {

  const subjects = [
    {
      title: 'Database and Warehousing',
      term: 'Fall 2020'
    },
    {
      title: 'Adv Software Development',
      term: 'Fall 2020'
    },
    {
      title: 'Communications Skills',
      term: 'Fall 2020'
    },
    {
      title: 'Cloud Computing',
      term: 'Winter 2021'
    },
    {
      title: 'Adv Web Development',
      term: 'Winter 2021'
    },
    {
      title: 'Technology Innovation',
      term: 'Winter 2021'
    },
  ]
  if (props.type === 'parent') {
    return <ParentView/>
  } else {
    return (
      <Row >
      <Col className="maincontainerBox">
        <div className="MainContainer">
          {
            subjects.map((subject, index) => <Card key={index} title={subject.title} term={subject.term} subjectId={index}/>)
          }
        </div>
      </Col>
    </Row >
    )
  }
}

export default MainContainer;
