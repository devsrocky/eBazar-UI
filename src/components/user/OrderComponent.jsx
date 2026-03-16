import { Link } from "react-router-dom";
import InvoiceStore from "../../store/InvoiceStore";


const OrderComponent = () => {

    const { InvoiceList, TotalCount } = InvoiceStore();
 
    return (
        <div className='carts'>
            <div className='cart-header d-flex justify-content-between'>
                <h5>You have <strong>{TotalCount}</strong> invoices in list</h5>
                <select name="" id="" className="select-option">
                    <option value="all">All</option>
                    <option value="success">Success</option>
                    <option value="cancel">Cancel</option>
                    <option value="failed">Failed</option>
                </select>
            </div>
            <hr style={{margin: '0px !important', color: '#ddd'}}/>
            <table className="table cart-table">
                <thead>
                    <tr>
                        <th scope="col">Invoice:</th>
                        <th scope="col">Delivery</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    InvoiceList?.map((item, index) => {
                        return (
                            <tr className="smooth-fed-in" key={index.toString()} style={{animationDelay: `${index * 0.1}s`}}>
                                    <td className="d-flex gap-2">
                                        <div className="d-flex flex-column prod-details justify-content-center align-items-center">
                                            <Link to={`/shop`}>{item['tran_id'].substring(5, -1)}</Link>
                                        </div>
                                    </td>
                                    <td className="total-price">{item['delivery_status']}</td>
                                    <td className="total-price">${Math.floor(item['payable'])}</td>
                                    <td className="rmv-btn w-100 d-flex text-center align-middle">
                                        <Link to={`/invoice-details/${item['_id']}`}>View</Link>
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
                    <h5>Go and <strong>buy more</strong></h5>
                </div>
                <div>
                    <Link to='/shop' style={{textDecoration: 'none', color: '#0097dd'}}>Shop</Link>
                </div>

            </div>
        </div>
    );
};

export default OrderComponent;