import React from 'react';
import Logout from '../logout/Logout';
import TopNavbar from '../TopNavbar/topnavbar.component';
import './CourseContent.css';



class CourseContent extends React.Component {
 
  render() {
    return (
        <div className="CourseContent">
          <TopNavbar />
          <Logout />
            <h1>{this.props.location.state.course}</h1>
        </div>
     );
  }
}

export default CourseContent;
