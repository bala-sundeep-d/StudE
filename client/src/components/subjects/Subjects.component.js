import React from 'react';
import { Row } from 'react-bootstrap';
import Card from '../card/Card';

import "./Subjects.style.css";
import { customColors } from "../../assets/customColors";
/*  */
const Subjects = (props) => {
    const unsplashClientId = "nIxtD5mZrdYN_cdZhBrf3M7lrxBJcYUPF9b3QqKsAvU";
    const subjectList = [
        {
            title: 'Database and Warehousing',
            term: 'Fall 2020',
            description: "improves calculation ability improves calculation ability improves calculation ability "
        },
        {
            title: 'Adv Software Development',
            term: 'Fall 2020',
            description: "coding ability improves calculation ability improves calculation ability "
        }/*,
        {
            title: 'Adv Software Development',
            term: 'Fall 2020',
            description: "coding ability improves calculation ability improves calculation ability "
        }*/
    ];

    return (
        <Row className="allCoursesContainer">
            <header >
                <h1> My Courses</h1>
            </header>
            <div className="allSubjectsCardDeck">
                {
                    subjectList.map((subject, index) => <Card key={index} title={subject.title} term={subject.term} subjectId={index} />)
                }
            </div>
        </Row >
    )
}

export default Subjects;

/*
{

                    subjectList.map((subject, index) => <Card key={index} title={subject.title} term={subject.term} subjectId={index} />)
                }
                */