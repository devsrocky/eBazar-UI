import {create} from 'zustand';
import axios from 'axios';
import { BaseURL } from '../utility/BaseURL';
// let BaseURL = 'http://localhost:5050/api/v1';
import Cookies from 'js-cookie';
import { getToken, setToken } from '../utility/Storage';
import { Unathorized } from '../utility/Utility';


const UserStore = create((set) => ({



    LoginFormData: {email: '', otp: ''},
    LoginFormOnChange: (name, value) => {
        set((state) => ({
            LoginFormData: {
                ...state.LoginFormData,
                [name]: value
            }
        }))
    },

    isSubmiting: false,
    UserOTPRequest: async (email) => {
        set({isSubmiting: true});
        let res = await axios.get(`${BaseURL}/OTPSender/${email}`);
        set({isSubmiting: false});
        return res.data['status'] === 'success';
    },

    OTPVerifyRequest: async (email, otp) => {
        set({isSubmiting: true});
        let res = await axios.get(`${BaseURL}/VerifyLogin/${email}/${otp}`, {withCredentials: true});
        let token = res.data['token'];
        setToken(token);
        set({isSubmiting: false});
        return res.data['status'] === 'success';
    },

    iaLogin: () => {
        let token = Cookies.get('token');
        if(!token){
            token = getToken('token');
        }
        return token ? {auth: true, token: token} : {auth: false, token: null}
    },

    CustomerForm: {
        cus_add: "",
        cus_city: "",
        cus_country: "",
        cus_fax: "",
        cus_name: "",
        cus_phone: "",
        cus_postcode: "",
        cus_state: "",

        ship_add: "",
        ship_city: "",
        ship_country: "",
        ship_name: "",
        ship_phone: "",
        ship_postcode: "",
        ship_state: ""
    },
    CustomerFormChange: (name, value) => {
        set((state) => ({
            CustomerForm: {
                ...state.CustomerForm,
                [name]: value
            }
        }))
    },


    CustomerDetails: null,
    CustomerDetailsRequest: async (token) => {
        try {
            let res = await axios.get(`${BaseURL}/ProfileDetails`, {headers:  {token}});
            // console.log(res.data['data'])
            if(res.data['data'].length > 0){
                set({CustomerDetails: res.data['data']});
                set({CustomerForm: res.data['data'][0]});
            }else{
                set({CustomerDetails: []})
            }
        } catch (err) {
            Unathorized(err.status)
        }
    },

    ProfileSaveRequest: async (PostBody, token) => {
        try {
            set({isSubmiting: true});
            let res = await axios.post(`${BaseURL}/SaveProfile`, PostBody, {headers: {token}});
            set({isSubmiting: false});
            return res.data['status'] === 'success'
        } catch (err) {
            Unathorized(err.status)
        }
    },

    LogoutRequest: async () =>{
        let res = await axios.get(`${BaseURL}/Logout`);
        return res.data['status'] === 'Logout';
    }


}))

export default UserStore;