import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ArrowLeft, ArrowRight, StarFill } from 'react-bootstrap-icons';
import payments from '../../assets/images/payment.png'
import { useState } from 'react';
import CreateReview from '../user/CreateReview';
import ProductStore from '../../store/ProductStore';
import ProductImage from './ProductImage';
import CurtButton from '../../helper/CurtButton';
import CartStore from '../../store/CartStore';
import { getToken } from '../../utility/Storage';
import { ErrorMSG, SuccessMSG } from '../../utility/MessageHelper';
import UserStore from '../../store/UserStore';
import { useNavigate } from 'react-router-dom';
import DetailsSkeleton from '../../skeletons/DetailsSkeleton';
import Subtitle from '../about/Subtitle';
const Product = 'https://bazaar.qodeinteractive.com/wp-content/uploads/2017/06/h1-product-3-768x768.jpg';

const Details = () => {


    const navigate = useNavigate();
    const { iaLogin } = UserStore();
    const {ProductDetails} = ProductStore();
    const { CartSaveRequest } = CartStore();
    const Details = ProductDetails;
    const [key, setKey] = useState("description");
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("brown");

    const sizes = ["S", "M", "L", "XL", "XXL"];
    const colors = [
        { name: "black", code: "#111" },
        { name: "white", code: "#ffffff" },
        { name: "blue", code: "#001aff" },
        { name: "yellow", code: "#ffee00" },
    ];


    const CartProduct = async (productId) => {

        const token = getToken();
        if(iaLogin().auth === true){
            const postbody = { productID: productId, color: selectedColor, qty: quantity, size: selectedSize}
            let res = await CartSaveRequest(postbody, token);
            if(res === true){
                SuccessMSG('Product carted success!')
            }else{
                ErrorMSG('There went something wrong!')
            }
        }else{
            navigate('/login')
        }
    }

    if(ProductDetails === null){
        return <DetailsSkeleton/>
    }else{
        return (
            <>
                <Subtitle />
                <Container className='py-5'>
                    <Row>
                        <Col lg={5} xs={12}>
                            <div style={{ maxWidth: "100%" }}><ProductImage /></div>
                        </Col>
                        <Col lg={7} xs={12}>
                            <Col className='product-content pt-2' style={{height: 'auto'}}>
                                <h2 className='title-text'>{Details?.[0]['title']}</h2>
                                <Col className='review-counter d-flex align-items-center'>
                                    {
                                        Array.from({length: 5}).map((_, index) => {
                                            return (
                                                <StarFill size={15} key={index.toString()} className={index < 4 ? "rated-str" : "blank-str"}/>
                                            )
                                        })
                                    }
                                    <span>({Details?.[0]['star']} customer review)</span>
                                </Col>
                                <p className='content-text'>{Details?.[0]['shortDes']}</p>
                                <h6><strong>Stock:</strong> {Details?.[0]['stock'] === true ? <span>Available</span> : <strike>Unavailable</strike>}</h6>

                                <div className=' pt-2 d-flex gap-2' >
                                    <div className='quantity bg-clr d-flex align-items-center' style={{flex: '1'}}>
                                        <span>Color</span>
                                        <div className='d-flex gap-3'>
                                        {
                                        colors.map((color) => (
                                            <div key={color.name} onClick={() => setSelectedColor(color.name)}
                                            style={{
                                                width: "22px",
                                                height: "22px",
                                                borderRadius: "50%",
                                                backgroundColor: color.code,
                                                cursor: "pointer",
                                                border:
                                                selectedColor === color.name ? "2px solid #000" : "1px solid #bbb",
                                                boxShadow: selectedColor === color.name ? "0 0 0 3px #fff inset" : "none",
                                            }}
                                            />
                                        ))
                                        }
                                        </div>
                                    </div>
                                    <div className='quantity bg-clr d-flex align-items-center' style={{flex: '1'}}>
                                        <span>Size</span>
                                        <div className='d-flex gap-2 px-2 product-sizes'>
                                        {
                                        sizes.map((size) => (
                                            <span key={size} onClick={() => setSelectedSize(size)}
                                            className={` ${selectedSize === size ? 'size-active' : ''}`} >
                                            {size}
                                            </span>
                                        ))
                                        }
                                        </div>
                                    </div>
                                </div>
                                <Col className='add-buttons d-flex gap-2 mt-3'>
                                    <div className='d-flex quantity align-items-center w-100' style={{background: '#fff6fab0'}}>
                                        <span>Quantity</span>
                                        <Col className='d-flex quant'>
                                            <button onClick={()=> setQuantity(prev => Math.max(1, prev - 1))}>-</button>
                                            <input type="text" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                        </Col>
                                    </div>
                                    <CurtButton onClick={async()=> {await CartProduct(Details?.[0]['_id'])}} Text='Add to cart' />
                                </Col>
                                <Col>
                                    <ul className='product-sub-details mt-4'>
                                        <li className='py-1' style={{textTransform: 'uppercase'}}><strong>SKU:</strong> EB-{Details?.[0]['_id'].slice(-4)}</li>
                                        <li className='py-1'><strong>Brand:</strong> {Details?.[0]['brand']['brandName']}</li>
                                        <li className='py-1'><strong>Category:</strong> {Details?.[0]['category']['categoryName']}</li>
                                    </ul>
                                    <Col className='payment-signify d-flex justify-content-center align-items-center'>
                                        <img src={payments} alt="img" />
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                </Container>

                <Container className='py-3'>
                    <Row className='pt-5'>
                        <Col xs={12}>
                            <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                                <Nav variant="tabs" className="custom-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="description" className={`raw-btn ${
                                        key === "description" ? "active-tab" : "inactive-tab"
                                    }`} >
                                    description
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="additional" className={`raw-btn ${
                                        key === "additional" ? "active-tab" : "inactive-tab"
                                    }`} >
                                    additional information
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="reviews" className={`raw-btn ${
                                        key === "reviews" ? "active-tab" : "inactive-tab"
                                    }`} >
                                    reviews (1)
                                    </Nav.Link>
                                </Nav.Item>
                                </Nav>

                                <Tab.Content className="mt-4 text-muted">
                                <Tab.Pane eventKey="description">
                                    <p style={{color: 'var(--down-color)', fontSize: '15px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                                    ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                                    et magnis dis parturient montes nascetur ridiculus mus.
                                    Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi.
                                    Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia
                                    tellus, vitae condimentum nulla enim bibendum nibh. Praesent
                                    turpis risus, interdum nec venenatis id, pretium sit amet purus.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="additional">
                                    <p style={{color: 'var(--down-color)', fontSize: '15px'}}>Additional product information goes here.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="reviews">
                                    <CreateReview />
                                </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }


};

export default Details;