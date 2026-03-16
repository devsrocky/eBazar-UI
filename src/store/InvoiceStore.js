import { create } from 'zustand';
import axios from 'axios';
import { Unathorized } from '../utility/Utility';
import { BaseURL } from '../utility/BaseURL';

const InvoiceStore = create((set) => ({

    CreateInvoiceRequest:  async (token) => {
        try {
            let res = await axios.post(`${BaseURL}/CreateInvoice`, {}, {headers: {token}})
            if(res.data['status'] === 'success'){
                window.location.href = res.data['data']['GatewayPageURL']
            }
        } catch (err) {
            Unathorized(err.status)
        }
    },

    InvoiceList: [],
    TotalCount: 0,
    InvoiceListRequest: async (token) => {
        try {
            let res = await axios.get(`${BaseURL}/Invoice-order-list`, { headers: {token} });
            set({InvoiceList: res.data['data']})
            set({TotalCount: res.data['data'].length})
        } catch (err) {
            return Unathorized(err.status)
        }
    },

    InvoiceDetails: null,
    InvoiceDetailsRequest: async (invoiceId, token) => {
        try{
            let res = await axios.get(`${BaseURL}/InvoiceList/${invoiceId}`, { headers: {token} })
            if(res.data['status'] === 'success'){
                set({InvoiceDetails: res.data['data']})
            }
        }catch(err){
            return Unathorized(err.status)
        }
    }

}))

export default InvoiceStore;