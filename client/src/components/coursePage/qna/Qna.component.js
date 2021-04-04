/* Author: Prashant Sanjay Sarvi */

import React from 'react';
import './Qna.style.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Qna extends React.Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true, allQnA: undefined };
    }
    componentDidMount(){
        const userId= localStorage.getItem('userId');
        if(this.props && this.props.location && this.props.location.state && this.props.location.state.cid){
            axios.get('/qna/getPostById?chapterId=' + this.props.location.state.cid).then(response => {
                const allQnA = response.data;
                this.setState({allQnA: allQnA});
                this.setState({ isLoading: false });
            });
        }
        
    }
    render() {
     
        const { isLoading, allQnA } = this.state;

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
        return (
            <div className="app-data"
                style={{ padding: "15px", background: "rgba(218, 124, 17, 0.61)", borderRadius: '15px', color: "#FFFFE0" }}>

           {
               allQnA.map(qna=>
                <div key={qna._id}> <h3>{qna.question}</h3>
                <h6>{qna.answer}</h6>
                <br />
                <hr /></div>
                )
           }
           </div>
            
                
        );
    }
}

export default withRouter(Qna);