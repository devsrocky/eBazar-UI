import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import ProductStore from '../../store/ProductStore';

const Title = () => {

    const location = useLocation();
    const pathNames = location.pathname.split("/").filter(x => x);
    const {ProductDetails} = ProductStore();

    return (
        <Container className='page-title my-4 py-5' style={{background: "#f6f6f6"}}>
            <Row>
                <Col xs={12}>
                    <div className='title-link'> 
                        <Link to="/">← Home</Link>
                        <Link to={`/${pathNames[0]}`} >/ {pathNames[0]}</Link>
                        {
                            ProductDetails == null ? " ": <span >/ {ProductDetails?.[0]['title']}</span> 
                        }
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Title;