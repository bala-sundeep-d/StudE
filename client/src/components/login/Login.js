import React from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Login.style.css';

import Brand from '../Brand.js';

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

        axios.post('/login', { userId, password })
            .then(res => {
                if (res && res.data.message === "LOGIN_SUCCESS") {

                    localStorage.setItem('userId', res.data.user._id);
                    localStorage.setItem('userRole', res.data.user.role);

                    this.props.history.push('/');

                } else {
                    alert(res.data);
                    this.props.history.push('/login');
                }
            });
    }

    render() {
        return (
            <div className="login">
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 4 }} className="app-form">
                        <Brand />
                        <hr className="login-divider" />
                        <Form onSubmit={this.login} autoComplete="off">
                            <Form.Group controlId="userId">
                                <Form.Control type="text"
                                    placeholder='user id = 12345' onChange={this.updateUserId} />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Control type="password"
                                    placeholder='password = dasari@123' onChange={this.updatePassword} />
                            </Form.Group>

                            <Button type="submit" size="sm" className="login-submit">
                                Login
                    </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default withRouter(Login);