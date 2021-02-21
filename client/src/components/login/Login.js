import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            password: null
        }
    }

    updateUserId = e => {
        this.setState({ userId: e.target.value });
    }

    updatePassword = e => {
        this.setState({ password: e.target.value });
    }

    login = e => {
        e.preventDefault();
        e.stopPropagation();
        const userId = this.state.userId;
        const password = this.state.password;
    
        axios.post(`http://localhost:8000/login`, { userId, password })
          .then(res => {
            console.log(res.data);
              if (res && res.data === "LOGIN_SUCCESS") {
                  this.props.history.push('/');
              } else {
                this.props.history.push('/login');
              }
          });
    }

    render() {
        return (
            <div style={{border: "1px solid black",  width: "50%"}}>
                <Form onSubmit={this.login}>
                    <Form.Group controlId="userId">
                        <Form.Label>User id</Form.Label>
                        <Form.Control type="text" placeholder="Enter user id" onChange={this.updateUserId} />
                        <Form.Text className="text-muted">
                            "123456" is the sample user id for this assignment
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onChange={this.updatePassword} />
                        <Form.Text className="text-muted">
                            "pass@123" is the sample password for this assignment
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default withRouter(Login);