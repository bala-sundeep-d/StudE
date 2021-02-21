import React from 'react';
import { Button, Modal, Form, Card, Col } from 'react-bootstrap';

class DictionaryIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDictionary: false
        };
    }

    openDictionary = (e, flag) => {
        e.stopPropagation();
        this.setState({ showDictionary: flag });
    }

    render() {
        const { showDictionary } = this.state;
        return (
            <Button variant="primary" onClick={(e) => this.openDictionary(e, true)}
                style={{position:"fixed", zIndex:1000,
                borderRadius: "50px", width: "50px", height: "50px",
                bottom: "10%", right: "1%"}}
            >
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showDictionary}
                >
                    <Modal.Body>
                        <div style={{position: "relative", height: "50px", marginBottom: "10px"}}>
                            <Form.Control type="text" placeholder="Enter a word to search"
                              style={{position: "relative", width: "80%", height: "inherit", float:"left"}} />
                            
                            <Button variant="primary" style={{position: "relative", width: "20%", height: "inherit", float:"left"}}>
                                search
                            </Button>
                        </div>
                        <div>
                        <Card>
                            <Card.Body>API response goes here...</Card.Body>
                        </Card>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={(e) => this.openDictionary(e, false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Button>
        )
    }
}

export default DictionaryIcon;