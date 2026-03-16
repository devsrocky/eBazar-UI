import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import SubBanner from '../../assets/images/eBajar subtitle banner.jpg';

const Subtitle = () => {

    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    return (
        <Container className='subtitle-banner my-3 py-5' style={{background: `url(${SubBanner})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Row>
                <Col xs={12}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h5 style={{textTransform: 'uppercase'}}>{pathname}</h5>
                        <ul className='d-flex gap-2 p-0 m-0'>
                            <li style={{listStyle: 'none'}}><Link to='/'>← Home</Link></li>
                            <li style={{listStyle: 'none'}}>-</li>
                            <li style={{listStyle: 'none'}}>{pathname}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Subtitle;