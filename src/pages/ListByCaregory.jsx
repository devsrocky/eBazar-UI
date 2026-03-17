import React, { useEffect } from 'react';
import ProductStore from '../store/ProductStore';
import { useParams } from 'react-router-dom';
import Layout from '../masterlayout/Layout';
import Subtitle from '../components/about/Subtitle';
import { Col, Container, Row } from 'react-bootstrap';
import Filter from '../components/shop/Filter';
import AllProducts from '../components/shop/AllProducts';

const ListByCaregory = () => {

    const params = useParams();
    const { cateID } = params;
    const { CategoryList, BrandList, ListByBrandRequest, CategoryListRequest, BrandListRequest } = ProductStore();

    useEffect( () => {
        (async() => {
            await ListByCategRequest(cateID);
            CategoryList === null && await CategoryListRequest();
            BrandList === null && await BrandListRequest();
        })()
    }, [cateID])

    return (
        <Layout>
        <Subtitle/>
        <Container className="py-5">
            <Row>
                <Col xs={12}>
                    <Col style={{width: '100%'}} className="filter-product">
                        <div className="filter">
                            <Filter/>
                        </div>
                        <div className="listing">
                            <AllProducts/>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
        </Layout>
    );
};

export default ListByCaregory;