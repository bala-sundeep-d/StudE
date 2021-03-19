import './NavTabs.style.css'
import React, { Component } from "react";
import { Container, Tabs, Tab } from 'react-bootstrap';

import QnA from '../coursePage/qna/Qna.component';
import { customColor } from '../../assets/customColors';

class NavTabs extends Component {

    render() {
        return (
            <Container >
                <Tabs fill defaultActiveKey="chapters" id="TabLink" className="CourseTabBar" style={{ borderRadius: '10px 10px 0px 0px' }}>
                    <Tab eventKey="chapters" title="Chapters" className="CourseTabs" style={{ borderColor: customColor.Red }} >

                    </Tab>
                    <Tab eventKey="Qna" title="QnA" className="CourseTabs" style={{ borderColor: customColor.Yellow }}>
                        <QnA />
                    </Tab>
                    <Tab eventKey="Notes" title="Notes" className="CourseTabs" style={{ borderColor: customColor.Dark_Green }}>

                    </Tab>
                    <Tab eventKey="Discussions" title="Discussions" className="CourseTabs" style={{ borderColor: customColor.Green }}>

                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default NavTabs;