import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartStore from "../../store/CartStore";
import SubmitBtn from '../../helper/SubmitBtn';
import { getToken } from "../../utility/Storage";
import { SuccessMSG } from "../../utility/MessageHelper";



const CartComponent = () => {

    let subTotal;
    let token = getToken();
    
    const navigate = useNavigate();
    const [QTY, setQTY] = useState();
    const [selected, setSelected] = useState();
    const [Quantity, setQuantity] = useState([])
    const [Active, setActive] = useState('');
    const [Total, setTotal] = useState('');
    const { CartList, UpdateCartRequest, CartListRequest } = CartStore();

    useEffect(() => {
        if (CartList && CartList.length > 0) {
            setQuantity(CartList.map(item => Number(item.qty)));
        }
    }, [CartList]);
    const OnChangeQuantity = (index, newQty) => {
        const updated = [...Quantity];
        updated[index] = newQty;
        setQuantity(updated);
    };

    const UpdateCart = async (cartId, qty) => {
        let postbody = {qty: qty}
        let res = await UpdateCartRequest(cartId, postbody, token)
        if(res === true){
            setActive('')
            setTotal('')
            await CartListRequest(token)
            SuccessMSG('Cart update success!')
        }
    }

    const RedirectTo = () => {
        navigate('/checkout')
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
                        <th scope="col">Size</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    CartList.map((item, index) => {

                        let price = item['product']['discount'] === true ? item['product']['discountPrice'] : item['product']['price'];
                        let total = price * item['qty'];
                        subTotal = CartList.reduce((sum, item, index) => {
                            const qty = Quantity[index] ?? item.qty ?? 1;
                            let price = item['product']['discount'] === true ? item['product']['discountPrice'] : item['product']['price']
                            return sum + price * qty;
                        }, 0)
                        return (
                            <tr  key={index.toString()} className="smooth-fed-in" style={{animationDelay: `${index * 0.1}s`}}>
                                    <td className="d-flex gap-2">
                                        <img src={item['product']['image']} alt="product" style={{width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover'}}/>
                                        <div className="d-flex flex-column prod-details">
                                            <Link to='#'>{item['product']['title'].substring(12, -1)}</Link>
                                        </div>
                                    </td>
                                    <td className="tb-price">{item['size']}</td>
                                    <td className="cat-quant">
                                        <div className="tb-quantity d-flex">
                                            <button onClick={() => {if(Quantity[index] > 1){OnChangeQuantity(index, Quantity[index] - 1), setActive('BTNactive'), setTotal('d-none'), setSelected(item['_id'])}}}>-</button>
                                            <input className="Curentvalue" type="text" value={Quantity[index] ?? item.qty} />
                                            <button onClick={() => {OnChangeQuantity(index, (Quantity[index] ?? item.qty) + 1), setActive('BTNactive'), setTotal('d-none'), setSelected(item['_id'])}}>+</button>
                                        </div>
                                    </td>

                                    <td className="total-price">${price}</td>
                                    <td className="total-price">
                                        <span className={`${item['_id'] === selected ? Total : ''}`}>${total}</span>
                                        <button onClick={() => {UpdateCart( item['_id'], Quantity[index] ?? item.qty)}} className={`${item['_id'] === selected ? Active  : ''}`}>Save</button>
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
                    <SubmitBtn onClick={RedirectTo} Text='Checkout' />
                </div>
                <div>
                    <h5>Total: <strong>${subTotal}</strong></h5>
                </div>

            </div>
        </div>
    );
};

export default CartComponent;