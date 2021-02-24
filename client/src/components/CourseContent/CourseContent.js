import React from 'react';
import './CourseContent.css';


class CourseContent extends React.Component {
 
  render() {
    return (
        <div className="CourseContent">
            <h1>{this.props.location.state.course}</h1>
        </div>
     );
  }
}

export default CourseContent;
