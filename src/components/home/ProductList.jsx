import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Spacer from "../../helper/Spacer";
import ProductStore from "../../store/ProductStore";
import ProductSkeleton from "../../skeletons/ProductSkeleton";
import CartStore from "../../store/CartStore";
import WishStore from "../../store/WishStore";
import { getToken } from "../../utility/Storage";
import { SuccessMSG } from "../../utility/MessageHelper";
import CurtButton from "../../helper/CurtButton";
import WishButton from "../../helper/WishButton";

const ProductList = () => {

    let token = getToken();
    const { ProductList } = ProductStore();
    const { CartSaveRequest, CartListRequest } = CartStore();
    const { WishSaveRequest, WishListRequest } = WishStore();

    const SaveCart = async (productId) => {
        let postbody = { productID: productId, color: "default", qty: "1", size: "Free"};
        let res = await CartSaveRequest(postbody, token);
        console.log(res)
        if(res === true){
            await CartListRequest(token);
            SuccessMSG('Product carted success!')
        }else if(res === false){
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = '/login'
        }
    }
    const SaveWish = async (productId) => {
        const postbody = {productID: productId};
        let res = await WishSaveRequest(postbody, token);
        if(res === true){
            await WishListRequest(token);
            SuccessMSG("Product saved as wish!")
        }else if(res === false){
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = '/login'
        }
    }

    if(ProductList === null){
        return <ProductSkeleton />
    }else{
            return (
        <Container className="py-4">
            <Row>

                {
                    ProductList.map((item, index) => {

                        let price = <p className="p-0 m-0">{item['price']}</p>;
                        if(item['discount'] === true){
                            price = <p className="p-0 m-0"> <strike style={{color: 'var(--tx-primary-hover)', fontSize: '14px', paddingRight: '10px'}}>${item['price']}</strike> ${item['discountPrice']}</p>;
                        }

                        return (
                            <Col lg={3} md={4} xs={6} key={index.toString()} className="pb-5">
                                <Link to={`/shop/${item['_id']}`} className="product-grid"
                                    style={{"--delay": index}}
                                >
                                    <img src={`${item['image']}`} alt="product" />
                                    <Col className="product-content px-2">
                                        <Spacer size={10}/>
                                        <h1 className="m-0">{item['title']}</h1>
                                        {price}
                                        <Spacer size={10}/>
                                        <Col className="product-btn-controll">
                                            <Col className="product-buttons d-flex justify-content-between">
                                                <CurtButton onClick={(e)=> {e.preventDefault(); SaveCart(item['_id'])}} Text='Add to cart' loading='Carting...'/>
                                                <WishButton onClick={(e) => {e.preventDefault(); SaveWish(item['_id'])}} loading='Saving...' Text='Save wish' />
                                            </Col>
                                        </Col>
                                    </Col>
                                </Link>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    );
    }
};

export default ProductList;