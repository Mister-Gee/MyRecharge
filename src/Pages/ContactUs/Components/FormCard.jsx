import { Form } from 'react-bootstrap';

const FormCard = () => {
  return (
    <div className='faq-dropdown-card fc-container'>
        <div className='card fc-card'>
            <Form className="contact-form"> 
                <Form.Group className="form-group">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email Address" 
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                        type="text" 
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>How can we help?</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        row={10}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <button className='contact-btn'>Send</button>
                </Form.Group>
            </Form>
        </div>
    </div>
  )
}

export default FormCard