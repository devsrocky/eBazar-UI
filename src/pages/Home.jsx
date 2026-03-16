import React, { useEffect } from 'react';
import Layout from '../masterlayout/Layout';
import HeroSlider from '../components/home/HeroSlider';
import ProductStore from '../store/ProductStore';
import Categories from '../components/home/Categories';
import ProductList from '../components/home/ProductList';
import TabSection from '../components/home/TabSection';
import Brands from '../components/home/Brands';
import BlogSection from '../components/home/BlogSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductSkeleton from '../skeletons/ProductSkeleton';
import TabSkeleton from '../skeletons/TabSkeleton';


const Home = () => {

    const { SliderListRequest, CategoryListRequest, productListByRemarkRequest, BrandListRequest } = ProductStore();

    useEffect(() => {
        (async () => {
            await SliderListRequest()
            await CategoryListRequest()
            await productListByRemarkRequest('new')
            await BrandListRequest()
        })()
    }, [])

    return (
        <Layout>
            <HeroSlider />
            <Categories />
            <TabSection />
            <ProductList />
            <Brands />
            <BlogSection />
            <FeaturesSection />
        </Layout>
    );
};

export default Home;