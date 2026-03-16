import React from 'react';
import Layout from '../masterlayout/Layout';
import CustomerLayout from '../components/user/CustomerLayout';
import WishlistComponent from '../components/user/WishlistComponent';
import WishStore from '../store/WishStore';

const Wishes = () => {

    const { WishListRequest } = WishStore();

    return (
        <Layout>
            <CustomerLayout component={<WishlistComponent />} />
        </Layout>
    );
};

export default Wishes;