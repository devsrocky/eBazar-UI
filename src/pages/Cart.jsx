import Layout from '../masterlayout/Layout';
import CustomerLayout from '../components/user/CustomerLayout';
import CartComponent from '../components/user/CartComponent';
import { useEffect, useState } from 'react';
import { getToken } from '../utility/Storage';

const Cart = () => {

    let token = getToken();
    const { CartList, CartListRequest } = useState();

    // useEffect(() => {
    //     (async () => {
    //         CartList.length === 0 && await CartListRequest(token)
    //     })()
    // }, [])

    return (
        <Layout>
            <CustomerLayout component={<CartComponent/>}/>
        </Layout>
    );
};

export default Cart;