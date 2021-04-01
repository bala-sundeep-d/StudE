/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-29 08:48:20
 * @modify date 2021-03-31 21:31:42
 * @desc Notification to get updates from backend
 */

import React, { useState } from 'react';
import { Col, Row, Toast, Button } from 'react-bootstrap';

import './NotificationToast.style.css';
import { customColor } from '../../assets/customColors';

const NotificationToast = (props) => {

    const [show, setShow] = useState(true);

    /* Method to get Notification color from Assets */
    function getColour(NotificationType) {
        switch (NotificationType) {
            case 'success':
                return customColor.Notification_Success;
            case 'error':
                return customColor.Notification_Error;
            case 'info':
                return customColor.Notification_Info;
        }
    }

    return (

        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation={true} style={{ backgroundColor: getColour(props.type) }}>
            <Toast.Header>
                <strong className="mr-auto">{props.title}</strong>
            </Toast.Header>
            <Toast.Body>{props.content}</Toast.Body>
        </Toast>
    );
}
export default NotificationToast;