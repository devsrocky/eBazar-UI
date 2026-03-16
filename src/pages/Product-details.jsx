import React, { useEffect } from 'react';
import Layout from '../masterlayout/Layout';
import Details from '../components/shop/Details';
import Brands from '../components/home/Brands';
import ProductStore from '../store/ProductStore';
import { useParams } from 'react-router-dom';
import Subtitle from '../components/about/Subtitle';

const ProductDetails = () => {

    const params = useParams();
    const productId = params.productID;

    const { BrandListRequest, ProductDetailsRequest, ReviewListRequest } = ProductStore()

    useEffect(() => {
        (async() => {
            await BrandListRequest()
            await ProductDetailsRequest(productId)
            await ReviewListRequest(productId)
        })()
    }, [])

    return (
        <Layout>

            <Details />
            <Brands />
        </Layout>
    );
};

export default ProductDetails;