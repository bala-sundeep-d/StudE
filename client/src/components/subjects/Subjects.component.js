/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-31 20:36:21
 * @modify date 2021-04-03 21:07:56
 * @desc Page to show subjects a user have
 */
import React, { useState, useEffect } from 'react';
import { Row, Spinner, Container } from 'react-bootstrap';
import Card from '../card/Card';
import axios from 'axios';

import "./Subjects.style.css";

const Subjects = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [allSubjectList, setAllSubjectList] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const userRole = localStorage.getItem("userRole");

        const urlToGetAllSubjects = "/subjects/getByStudentId?studentId=" + userId;

        axios.get(urlToGetAllSubjects).then(response => {
            const comments = response.data;
            setAllSubjectList(comments);
            setLoading(false);
        });
    }, []);


    if (isLoading) {
        return (
            <Container className="TeacherCommentsContainer">
                <Spinner animation="border" role="status" variant="light">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <Row className="allCoursesContainer">
            <header >
                <h1> My Courses</h1>
            </header>
            <div className="allSubjectsCardDeck">
                {
                    allSubjectList.map((subject, index) => <Card key={subject._id} title={subject.title} term={subject.term} subjectId={subject._id} />)
                }
            </div>
        </Row >
    )
}

export default Subjects;
