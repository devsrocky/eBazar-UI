import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    404 not found
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;