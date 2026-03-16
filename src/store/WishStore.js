import {create} from 'zustand';
import axios from 'axios';
import { Unathorized } from '../utility/Utility';
import { BaseURL } from '../utility/BaseURL';

const WishStore = create((set) => ({


    IsWishSubmit: false,
    WishSaveRequest: async (postbody, token) => {

        try {
            set({IsWishSubmit: true});
            let res = await axios.post(`${BaseURL}/SaveWishList`, postbody, { headers: {token}});
            return res.data['status'] === 'success';
        } catch (err) {
            Unathorized(err.status)
        }finally{
            set({IsWishSubmit: false})
        }
    },

    WishList: [],
    WishCount: 0,
    WishListRequest: async (token) => {
        try {
            let res = await axios.get(`${BaseURL}/WishList`, {headers: {token}});
            set({WishList: res.data['data']});
            set({WishCount: res.data['data'].length})
        } catch (err) {
            Unathorized(err.status)
        }
    },

    WishRemoveRequest: async (postbody, token) => {
        set({IsWishSubmit: true});
        let res = await axios.post(`${BaseURL}/RemoveWish`, postbody, {headers: {token}});
        set({IsWishSubmit: false});
        return res.data['status'] === 'success';
    }


}))

export default WishStore;