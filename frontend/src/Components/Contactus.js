import React from 'react'
import {Form,Row,Col,Container} from 'react-bootstrap'
import RoundButton from './RoundButton'
import GMap from './GMap'

export default function Contactus() {
    return (
        <div style={{padding:"50px",width:"100%"}}>
            <div id="contact-us" style={{width:"100%",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Form>
                    <Container fluid style={{maxWidth:"500px"}}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" placeholder="Name" style={{outline:"purple"}} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as='textarea' type="textarea" placeholder="Subject" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <RoundButton width="150px" height="50px" text="Submit Query" backgroundColor="purple" margin="auto"/>
                        </Row>
                    </Container>
                </Form>
                <GMap/>
            </div>
            
        </div>
    )
}
