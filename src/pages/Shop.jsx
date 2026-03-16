import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../components/shop/Filter";
import Layout from "../masterlayout/Layout";
import ProductStore from "../store/ProductStore";
import AllProducts from "../components/shop/AllProducts";
import Subtitle from "../components/about/Subtitle";

const Shop = () => {

  const {CategoryListRequest, BrandListRequest, AllProductRequest} = ProductStore();

  useEffect(() => {
    (async()=> {
      await CategoryListRequest()
      await BrandListRequest()
      await AllProductRequest()
    })()
  }, [])

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

export default Shop;
