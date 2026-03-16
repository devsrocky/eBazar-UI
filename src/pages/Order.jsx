import Layout from '../masterlayout/Layout';
import CustomerLayout from '../components/user/CustomerLayout';
import OrderComponent from '../components/user/OrderComponent';
import InvoiceStore from '../store/InvoiceStore';
import { useEffect } from 'react';
import { getToken } from '../utility/Storage';

const Order = () => {

    let token = getToken();
    const { InvoiceListRequest } = InvoiceStore();
    
    useEffect(() => {
        (async() => {
            await InvoiceListRequest(token)
        })()
    }, [])

    return (
        <Layout>
            <CustomerLayout component={<OrderComponent/>}/>
        </Layout>
    );
};

export default Order;