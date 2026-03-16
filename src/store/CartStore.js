import {create} from 'zustand';
import axios from 'axios';
import { Unathorized } from '../utility/Utility';
import { BaseURL } from '../utility/BaseURL';

const CartStore = create((set) => ({

    IsCurtSubmit: false,
    CartForm: { productID: " ", color: "", qty: "", size: ""},
    CartFormChange: (name, value) => {
        set((state) => ({
            CartForm: {
                ...state.CartForm,
                [name]: value
            }
        }))
    },

    CartSaveRequest: async (postbody, token) => {
        try{
            set({IsCurtSubmit: true});
            let res = await axios.post(`${BaseURL}/SaveCart`, postbody, {headers: {token}});
            return res.data['status'] === 'success'
        }catch(err){
            Unathorized(err.status)
        }finally{
            set({IsCurtSubmit: false});
        }
    },

    CartList: [],
    CartCount: 0,
    CartTotal: 0,
    CartVatTotal: 0,
    CartPayableTotal: 0,
    CartListRequest: async (token) => {
        try {
            let res = await axios.get(`${BaseURL}/CartList`, {headers: {token}});
            if(res.data['status'] === 'success'){
                set({CartList: res.data['data']});
                set({CartCount: res.data['data'].length})
            }
            let total = 0;
            let vat = 0;
            let payable = 0;
            res.data['data'].forEach((item, index) => {
                if(item['product']['discount'] === true){
                    total = total + item['qty'] * item['product']['discountPrice']
                }else{
                    total = total + item['qty'] * item['product']['price']
                }
            });

            vat = total * 0.05;
            payable = vat + total;
            set({CartTotal: total});
            set({CartVatTotal: vat});
            set({CartPayableTotal: payable})
        } catch (err) {
            Unathorized(err.status)
        }
    },

    RemoveCartRequest: async (Id, token) => {
        let res = await axios.get(`${BaseURL}/RemoveCart/${Id}`, {headers: {token}});
        return res.data['status'] === 'success';
    },

    UpdateCartRequest: async (cartID, PostBody, token) =>{
        let res = await axios.post(`${BaseURL}/UpdateCart/${cartID}`, PostBody, { headers: {token}});
        return res.data['status'] === 'success';
    }


}))

export default CartStore;