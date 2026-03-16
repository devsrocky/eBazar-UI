import { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import SubmitBtn from '../../helper/SubmitBtn'
import WishStore from "../../store/WishStore";
import { getToken } from "../../utility/Storage";
import { SuccessMSG } from "../../utility/MessageHelper";
import WishButton from "../../helper/WishButton";



const CartComponent = () => {

    let token = getToken();
    const WishList = WishStore((state) => state.WishList);
    const {WishRemoveRequest, WishListRequest} = WishStore()
    
    const RemoveWish = async (wishId) => {
        let postbody = {productID: wishId}
        let res = await WishRemoveRequest(postbody, token);
        if(res === true){
            await WishListRequest(token);
            SuccessMSG('Product removed success!')
        }
    }
    
    return (
        <div className='carts'>
            <div className='cart-header d-flex justify-content-between'>
                <h5>You have <strong>3</strong> product in cart</h5>
                <h5>Expected delivery <strong>Friday</strong></h5>
            </div>
            <hr style={{margin: '0px !important', color: '#ddd'}}/>
            <table className="table cart-table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    WishList?.map((item, index) => {
                        return (
                            <tr  className="smooth-fed-in" key={index.toString()}  style={{animationDelay: `${index * 0.1}s`}}>
                                    <td className="d-flex gap-2">
                                        <img src={item['product']['image']} alt="product" style={{width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover'}}/>
                                        <div className="d-flex flex-column prod-details justify-content-center align-items-center">
                                            <Link to={`/shop/${item['productID']}`}>{item['product']['title'].substring(12, -1)}</Link>
                                        </div>
                                    </td>
                                    <td className="tb-price">{item['product']['stock'] === true ? "Available" : 'Stockout'}</td>
                                    <td className="total-price">
                                        {item['brand']['brandName']}
                                    </td>

                                    <td className="total-price">${item['product']['discount'] === true ? item['product']['discountPrice'] : item['product']['price']}</td>
                                    <td className="rmv-btn">
                                        <SubmitBtn onClick={()=>{RemoveWish(item['productID'])}} Text='Remove' />
                                    </td>
                            </tr>
                        )
                    })
                }




                </tbody>
            </table>
            <hr style={{margin: '0px !important', color: '#ddd'}}/>

            <div className="d-flex justify-content-between align-items-center cart-header px-4 ">
                <div>
                    <h5>Go and <strong>Checkout</strong></h5>
                </div>
                <div>
                    <Link to='#' style={{textDecoration: 'none', color: '#0097dd'}}>Checkout</Link>
                </div>

            </div>
        </div>
    );
};

export default CartComponent;