import React, { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import './Dictionary.css';

const Dictionary = () => {

    const [modalShow, setModalShow] = useState(false);
    const [searchText, updateKeyValue] = useState(null);
    const [meaning, updateMeaningValue] = useState('Oxford dictionary response goes here...');

    const toggleModal = (e, flag) => {
      e.stopPropagation();
      updateKeyValue(null);
      updateMeaningValue('Oxford dictionary response goes here...');
      setModalShow(flag);
    }

    const updateKey = (e) => {
      e.stopPropagation();
      updateKeyValue(e.target && e.target.value);
    }

    const updateMeaning = (e) => {
      axios.get(`/dictionary/find?word=${searchText}`)
        .then(res => {
          const wordMeaning = res.data;
          updateMeaningValue(wordMeaning);
        })
        .catch(e => console.log(e));
    }

    return (
        <>
      <Button variant="primary" onClick={(e) => toggleModal(e, true)}
      style={{position:"fixed", zIndex:1000, background:"#6ec4db",
      borderRadius: "50px", width: "50px", height: "50px",
      bottom: "10%", right: "3%"}}>
        <i className="dict-icon bi bi-search"></i>
      </Button>
      <div className="modal-wrapper"
      style={{
      transform: modalShow ? 'translateY(-100vh)' : 'translateY(0vh)',
      opacity: modalShow ? '1' : '0'
      }}>
      <div className="modal-header">
        <Form.Control type="text" placeholder="Enter a word to search"
              style={{position: "relative", width: "85%", height: "95%", margin: "0px",
              marginRight: "2px", borderRadius: "0px", float:"left"}} 
              onChange={updateKey} />
        
        <Button style={{ background:"#6ec4db", border: "#6ec4db", 
            position: "relative", width: "15%", height: "95%", margin: "0px", float:"left"}}
            onClick={updateMeaning} >
            search
        </Button>
      </div>
      <div className="modal-body">
      <div style={{position: "relative", width: "100%",
        height: "100%", margin: "0px", float:"left", border: "1px solid #d0cccc",
        boxShadow:"1px 1px #d0cccc", borderRadius: "5px"}}>
      {meaning}
                        </div>
      </div>
      <div className="modal-footer">
        <Button style={{ background:"rgb(255, 80, 80)", border: "rgb(255, 80, 80)", 
          position: "relative", width: "15%", height: "95%", margin: "0px", float:"right"}}
          onClick={(e) => toggleModal(e, false)}>Close</Button>
        </div>
      </div>
    </>            
    );
}

export default Dictionary;