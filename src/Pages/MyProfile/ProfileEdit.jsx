import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';


const ProfileEdit = ({setIsEdit}) => {
  return (
    <div className='content-body'>
        <Row>
            <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                </div>
            </Col>
            <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>Preferred first name (optional)</Form.Label>
                    <Form.Control type="text" placeholder="Preferred first name (optional)" />
                </div>
            </Col>
            <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>Mobile phone number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile phone number" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Email address" />
                </div>
            </Col>
        </Row>
        <Row className='mt-3'>
            <div className='profile-edit-btns'>
                <button type="button" className='cancel-btn' onClick={() => setIsEdit(false)}>Cancel</button>
                <button type="button" className='save-btn'>Save</button>
            </div>
        </Row>
    </div>
  )
}

export default ProfileEdit