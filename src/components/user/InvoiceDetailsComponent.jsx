import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InvoiceStore from '../../store/InvoiceStore';
import CreateReview from './CreateReview';
const Image = 'https://www.shutterstock.com/image-photo/facial-cosmetic-products-containers-on-600nw-2566963627.jpg';

const InvoiceDetailsComponent = () => {

    const { InvoiceDetails } = InvoiceStore();
    const [Popup, setPopup] = useState('');
    const [ProductId, setProductId] = useState('');

    const popupHandler = (ID) => {
        setProductId(ID)
        setPopup('review-popup-active')
    }

    return (
        <div className='carts'>
            <div className='cart-header d-flex justify-content-between'>
                <h5>You have <strong>purchased</strong> products bellow</h5>
                <h5>Expected time on next <strong>Friday</strong></h5>
            </div>
            <hr style={{margin: '0px !important', color: '#ddd'}}/>
            <table className="table cart-table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">color</th>
                        <th scope="col">size</th>
                        <th scope="col">qty</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        InvoiceDetails?.map((item, index) => {
                            let price = item['price'] * item['qty'];
                            return (
                                <tr className="smooth-fed-in" key={index.toString()} style={{animationDelay: `${index * 0.1}s`}}>

                                        <td className="d-flex gap-2">
                                            <img src={item['image']} alt="product" style={{width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover'}}/>
                                            <div className="d-flex flex-column prod-details">
                                                <Link to={`/shop/${item['productID']}`} style={{top: '20px'}}>{item['title'].substring(8, -1)}</Link>
                                            </div>
                                        </td>

                                        <td className="tb-price">{item['color']}</td>
                                        <td className="total-price">{item['size']}</td>
                                        <td className="total-price">{item['qty']}</td>
                                        <td className="total-price">${price}</td>
                                        <td className="rmv-btn">
                                            <Link onClick={()=> {popupHandler(item['_id'])}} style={{display: 'block', marginTop: '5px'}}>Review</Link>
                                        </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className={`review-popup ${Popup}`}>
                <CreateReview ProductId={ProductId} setPopup={setPopup}/>
            </div>
            <hr style={{margin: '0px !important', color: '#ddd'}}/>

            <div className="d-flex justify-content-between align-items-center cart-header px-4 ">
                <div>
                    <h5>Go and <strong>buy more</strong></h5>
                </div>
                <div>
                    <Link to='/shop' style={{textDecoration: 'none', color: '#0097dd'}}>Shop</Link>
                </div>

            </div>
        </div>
    );
};

export default InvoiceDetailsComponent;