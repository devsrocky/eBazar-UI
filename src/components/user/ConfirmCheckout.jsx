import { useState } from "react";
import { Trash } from 'react-bootstrap-icons';
import CartStore from "../../store/CartStore";
import { SuccessMSG } from '../../utility/MessageHelper';
import {getToken} from '../../utility/Storage';
import InvoiceStore from "../../store/InvoiceStore";
const prod = 'https://demo.theme-sky.com/cozycorner/wp-content/uploads/2024/12/013-600x600.png';

const ConfirmCheckout = () => {

    let token = getToken();
    const { CreateInvoiceRequest } = InvoiceStore();
    const { CartList, CartTotal, CartVatTotal, CartPayableTotal, RemoveCartRequest, CartListRequest  } = CartStore()

    const RemoveCart = async (Id) => {
        let res = await RemoveCartRequest(Id, token);
        if(res === true){
            await CartListRequest(token)
            SuccessMSG('Product removed success!')
        }
    }

    return (
        <div style={{width: '100%', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px'}} className="py-4 px-2">
            <div className="cart-products" style={{width: '100%'}}>
                {
                    CartList.map((item, index)=> {
                        return(
                            <div key={index.toString()} className="product-per d-flex justify-content-between align-items-center smooth-fed-in" style={{animationDelay: `${index * 0.1}s`}}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={item['product']['image']} alt="prod" style={{width: '70px', height: '70px', borderRadius: '4px'}}/>
                                    <div>
                                        <h5 className="p-0 m-0">{item['product']['title'].substring(18, -1)}</h5>
                                        <span style={{textTransform: 'uppercase'}}>EB-{item['productID'].substring(4, -1)}</span>
                                        <h6>${item['product']['discount'] ? item['product']['discountPrice'] : item['product']['price']}</h6>
                                    </div>
                                </div>
                                <div className="trash-btn d-flex justify-content-center">
                                   <button onClick={() => {RemoveCart(item['_id'])}}><Trash size={20}/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pt-4 px-2">
                <div className="order-detils d-flex justify-content-between">
                    <h6>Vat</h6>
                    <span>${Math.floor(CartVatTotal)}</span>
                </div>
                <div className="order-detils d-flex justify-content-between">
                    <h6>Total</h6>
                    <span>${Math.floor(CartTotal)}</span>
                </div>
                <div className="order-detils d-flex justify-content-between">
                    <h6>Payable</h6>
                    <span>${Math.floor(CartPayableTotal)}</span>
                </div>
                <div className="order-confirm-btn d-flex justify-content-center align-items-center">
                    <button onClick={async() => { await CreateInvoiceRequest(token)}}>Payment now</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmCheckout;