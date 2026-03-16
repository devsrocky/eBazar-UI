import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductStore from '../../store/ProductStore';
import TabSkeleton from '../../skeletons/TabSkeleton';

const Categories = () => {
    const { CategoryList } = ProductStore()

    if(CategoryList === null){
        return <TabSkeleton />
    }else{
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className='carousel'>
                            {
                                CategoryList.map((item, index) => {
                                    return (
                                    <Link to={`/category/${item['_id']}`} className='card-per' key={index.toString()}>
                                        <img src={item['categoryImg']} alt={item['categoryImg']} style={{width: '180px', height: '180px', objectFit: 'cover'}} />
                                        <h3>{item['categoryName']}</h3>
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

export default Categories;