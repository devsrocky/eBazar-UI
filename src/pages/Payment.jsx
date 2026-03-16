import React, { useEffect } from 'react';
import Layout from '../masterlayout/Layout';
import CustomerLayout from '../components/user/CustomerLayout';
import PaymentComponent from '../components/user/PaymentComponent';
import { getToken } from '../utility/Storage';
import InvoiceStore from '../store/InvoiceStore';

const Payment = () => {

    let token = getToken();
    const { InvoiceListRequest } = InvoiceStore();
    
    useEffect(() => {
        (async() => {
            await InvoiceListRequest(token)
        })()
    }, [])

    return (
        <Layout>
            <CustomerLayout component={<PaymentComponent/>} />
        </Layout>
    );
};

export default Payment;