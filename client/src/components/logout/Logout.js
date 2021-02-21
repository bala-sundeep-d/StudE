import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Logout extends React.Component {
    
    constructor(props) {
        super(props);
    }


    logout = e => {
        axios.get(`http://localhost:8000/logout`)
          .then(() => {
            Cookies.remove("auth_token");
            this.props.history.push('/login');
          });
    }

    render() {
        return (
            <>
                <Button variant="primary" size="lg" onClick={this.logout}>
                    Logout
                </Button>
            </>
        );
    }
}

export default withRouter(Logout);