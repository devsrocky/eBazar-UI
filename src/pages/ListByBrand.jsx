import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductStore from '../store/ProductStore';
import Layout from '../masterlayout/Layout';
import Subtitle from '../components/about/Subtitle';
import Filter from '../components/shop/Filter';
import AllProducts from '../components/shop/AllProducts';
import { useParams } from 'react-router-dom';



const ListByBrand = () => {

    const params = useParams();
    const { brandId } = params;
    const { CategoryList, BrandList, ListByBrandRequest, CategoryListRequest, BrandListRequest } = ProductStore();

    useEffect(() => {
      (async() => {
        await ListByBrandRequest(brandId);
        CategoryList === null && await CategoryListRequest();
        BrandList === null && await BrandListRequest();
      })()
    }, [brandId])

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

export default ListByBrand;