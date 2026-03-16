import React, { useEffect } from 'react';
import { SuccessMSG } from '../utility/MessageHelper';
import Layout from '../masterlayout/Layout';
import CustomerLayout from '../components/user/CustomerLayout';
import ProfileComponent from '../components/user/ProfileComponent';
import UserStore from '../store/UserStore';
import { getToken } from '../utility/Storage';

const Profile = () => {

    let token = getToken('token');


    const { CustomerDetailsRequest } = UserStore();

    useEffect(() => {
        (async() => {
            await CustomerDetailsRequest(token)
        })()
    }, [])

    return (
        <Layout>
            <CustomerLayout component={<ProfileComponent/>}/>
        </Layout>
    );
};

export default Profile;