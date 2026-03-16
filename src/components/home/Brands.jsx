import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductStore from '../../store/ProductStore';
import TabSkeleton from '../../skeletons/TabSkeleton';

const Brands = () => {

    const { BrandList } = ProductStore()

    if(BrandList === null){
        return <TabSkeleton />
    }else{
        return (
            <Container className='py-5'>
                <Row>
                    <Col xs={12}>
                        <div className='carousel'>
                            {
                                BrandList.map((item, index) => {
                                    return (
                                    <Link to={`/by/${item['_id']}`} className='card-per' key={index.toString()}>
                                        <img src={item['brandImg']} alt={item['brandImg']} style={{width: '180px', height: '180px', objectFit: 'cover'}} />
                                        <h3>{item['brandName']}</h3>
                                    </Link>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }


};

export default Brands;