import React from 'react';
import './Qna.style.css';
import Axios from 'axios';
import axios from 'axios';

class Qna extends React.Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true, allQnA: undefined };
    }
    componentDidMount(){
        const userId= localStorage.getItem('userId');
        axios.get('/qna/getPostById?chapterId=' +'1').then(response => {
            const allQnA = response.data;
            this.setState({allQnA: allQnA});
            console.log(this.state.qna);
            this.setState({ isLoading: false });
        });
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
                <p>{qna.answer}</p>
                <br />
                <hr /></div>
                )
           }
           </div>
            
                
        );
    }
}

export default Qna;