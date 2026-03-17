import {create} from 'zustand';
import axios from 'axios';
// import { BaseURL } from '../utility/BaseURL';
const BaseURL = 'http://localhost:5050/api/v1'

const ProductStore = create((set) => ({

    IsLoader: false,
    SliderList: null,
    SliderListRequest: async () => {
        let res = await axios.get(`${BaseURL}/SliderList`);
        if(res.data['status'] === "success"){
            set({SliderList: res.data['data']})
        }
    },

    CategoryList: null,
    CategoryListRequest: async () => {
        let res = await axios.get(`${BaseURL}/CategList`);
        if(res.data['status'] === "success"){
            set({CategoryList: res.data['data']})
        }
    },

    BrandList: null,
    BrandListRequest: async () => {
        let res = await axios.get(`${BaseURL}/BrandList`);
        if(res.data['status'] === "success"){
            set({BrandList: res.data['data']})
        }
    },

    ProductList: null,
    productListByRemarkRequest: async (Remark) => {
        let res = await axios.get(`${BaseURL}/ListByRemark/${Remark}`);
        if(res.data['status'] === 'success'){
            set({ProductList: res.data['data']})
        }
    },

    AllProductRequest: async () => {
        let res = await axios.get(`${BaseURL}/all-products`);
        if(res.data['status'] === 'success'){
            set({ProductList: res.data['message']})
        }
    },

    CategoryList: null,
    CategoryListRequest: async () => {
        let res = await axios.get(`${BaseURL}/CategList`);
        if(res.data['status'] === 'success'){
            set({CategoryList: res.data['data']})
        }
    },

    BrandList: null,
    BrandListRequest: async () => {
        let res = await axios.get(`${BaseURL}/BrandList`);
        if(res.data['status'] === 'success'){
            set({BrandList: res.data['data']})
        }
    },


    ProductListRequestByFilter: async (PostBody) => {
        set({IsLoader: true});
        let res = await axios.post(`${BaseURL}/ListByFilter`, PostBody);
        set({IsLoader: false});
        if(res.data['status'] === 'success'){
            set({ProductList: res.data['data']})
        }
    },

    ProductDetails: null,
    ProductDetailsRequest: async (productID) => {
        let res = await axios.get(`${BaseURL}/ProductDetails/${productID}`);
        if(res.data['status'] === "success"){
            set({ProductDetails: res.data['data']})
        }
    },

    ReviewList: null,
    ReviewListRequest: async (productId) => {
        let res = await axios.get(`${BaseURL}/ReviewList/${productId}`);
        if(res.data['status'] === "success"){
            set({ReviewList: res.data['data']})
        }
    },

    ListByKeywordRequest: async (keyword) => {
        set({IsLoader: true});
        let res = await axios.get(`${BaseURL}/ListByKeyword/${keyword}`);
        set({IsLoader: false});
        if(res.data['status'] === 'success'){
            set({ProductList: res.data['data']})
        }
    },

    CreateReviewRequest: async (PostBody, token) => {
        let res = await axios.post(`${BaseURL}/feedback`, PostBody, { headers: {token} });
        if(res.data['status'] === 'success'){
            return res.data['status'] === 'success';
        }else if(res.data['status'] === 'exist'){
            return res.data;
        }
    },

    ListByBrandRequest: async (Id) => {
        set({IsLoader: true});
        let res = await axios.get(`${BaseURL}/ListByBrand/${Id}`);
        set({IsLoader: false});
        if(res.data['status'] === 'success'){
            set({ProductList: res.data['data']})
        }
    },

    ListByCategRequest: async (Id) => {
        set({IsLoader: true});
        let res = await axios.get(`${BaseURL}/ListByCateg/${Id}`);
        set({IsLoader: false});
        if(res.data['status'] === 'success'){
            set({ProductList: res.data['data']})
        }
    }



}))

export default ProductStore;