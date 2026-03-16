import { useEffect } from "react";
import CustomerLayout from "../components/user/CustomerLayout";
import InvoiceDetailsComponent from "../components/user/InvoiceDetailsComponent";
import Layout from "../masterlayout/Layout";
import InvoiceStore from "../store/InvoiceStore";
import { getToken } from "../utility/Storage";
import { useLocation, useParams } from "react-router-dom";


const InvoiceDetails = () => {

    let { invoiceId } = useParams();
    let token = getToken();
    const {InvoiceDetailsRequest} = InvoiceStore();

    useEffect(() => {
        (async() => {
            await InvoiceDetailsRequest(invoiceId, token)
        })()
    }, [])

    return (
        <Layout>
            <CustomerLayout component={<InvoiceDetailsComponent />} />
        </Layout>
    );
};

export default InvoiceDetails;