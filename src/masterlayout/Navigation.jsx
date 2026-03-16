import { Navbar, Nav, Container, Offcanvas, Row, Col } from "react-bootstrap";
import { Search, Person, Heart, Cart, Envelope, Telephone, BoxArrowInRight, BoxArrowRight, DoorClosed } from "react-bootstrap-icons";
import UserStore from "../store/UserStore";
import { Link, useLocation } from "react-router-dom";
import WishStore from "../store/WishStore";
import { useEffect, useState } from "react";
import { getToken } from "../utility/Storage";
import CartStore from "../store/CartStore";
import ProductStore from "../store/ProductStore";
import Spacer from "../helper/Spacer";



const Navigation = () => {

  const token = getToken();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const { LogoutRequest, iaLogin } = UserStore()
  const { WishList, WishCount, WishListRequest } = WishStore();
  const { CartList, CartCount, CartListRequest } = CartStore();
  const { ListByKeywordRequest, CategoryList } = ProductStore();
  const [Searches, setSearches] = useState('');
  const [Keyword, setKeyword] = useState('')

  console.log(path)

  useEffect(() => {
    (async()=> {

      await WishListRequest(token);
      await CartListRequest(token);

    })()
  }, [token])
  const SearchHandler = async (event) => {
    event.preventDefault()
    setSearches('')

    let res = await ListByKeywordRequest(Keyword)
    

    if(res){
      setSearches('d-none')
    }
  }

  const LogoutHandler = async () => {
    let res = await LogoutRequest();
    if(res === true){
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = '/';
    }
  }


  return (
    <>

        <section className={`search-section py-3 ${Searches}`}>
            <Container>
              <Row>
                <Col xs={12}>
                  <form action="#" className="search-form">
                    <Col className="search-field">
                      <input type="text" placeholder="Search product ..." onChange={(e) => {setKeyword(e.target.value)}} />
                      <button onClick={SearchHandler}>Search</button>
                    </Col>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <hr style={{margin: '0', borderColor: 'var(--clr-gray)'}} />
                  <ul className="suggetion-keys d-flex gap-3 py-2">
                    <li>Accessories</li>
                    {
                      CategoryList?.map((item, index) => {
                        return (
                          <li key={index.toString()}>{item['categoryName']}</li>
                        )
                      })
                    }
                  </ul>
                </Col>
              </Row>
            </Container>
        </section>
        <section className="d-none d-lg-block d-md-block z-1" style={{background: 'var(--clr-gray)'}}>
          <Container>
            <Row className="top-header align-items-center p-0 m-0" style={{ minHeight: "50px" }}>
                <Col lg={6} md={6} xs={6}> <p className="mb-0" style={{color: 'var(--tx-primary-text)'}}>Free delivery & 40% discount for next 3 orders! place your 1st order in.</p></Col>
                <Col lg={6} md={6} xs={6}>
                  <ul className="d-flex justify-content-end align-items-center gap-4 mb-0">
                      <li><a href="#" style={{color: 'var(--tx-primary-text)'}}><Telephone /> +8801701381850</a></li>
                     <li><a href="#" style={{color: 'var(--tx-primary-text)'}}> <Envelope/> devsrocky1@gmail.com</a></li>
                  </ul>
                </Col>
            </Row>
          </Container>
        </section>

      <Navbar expand="lg" className="header sticky-top overflow-hidden">

        <Container>

          {/* Logo — LEFT on mobile */}
          <Navbar.Brand href="/" className="me-auto ">
            <div className="logo d-flex"><sub>e</sub><h1>BAZAR</h1></div>
          </Navbar.Brand>

          {/* Hamburger and Search menu on right */}
          <div className="d-lg-none ms-auto d-flex align-items-center gap-3">
            <div className="mobile-search-icon" onClick={() => setSearches("search-active")} > <Search size={22} /> </div>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbar-light border-0" />
          </div>

          {/* Desktop Menu */}
          <Nav className="mx-auto d-none d-lg-flex gap-4 main-menu">
            <Link  to="/" className={`${path === '' ? 'main-menu-active' : ''}`}>Home</Link>
            <Link to="/shop" className={`${path === 'shop' ? 'main-menu-active' : ''}`}>Shop</Link>
            <Link to="/about" className={`${path === 'about' ? 'main-menu-active' : ''}`}>About</Link>
            <Link to="/contact" className={`${path === 'contact' ? 'main-menu-active' : ''}`}>contact us</Link>
            <Link to="/faqs" className={`${path === 'faqs' ? 'main-menu-active' : ''}`}>FAQs</Link>
          </Nav>

          {/* Desktop Icons */}
          <div className="d-none d-lg-flex gap-3 header-icons">
            <Link className="d-flex justify-content-center align-items-center gap-3 nav-icons"><Search size={18} onClick={() => {setSearches('search-active')}}/></Link>
            {
              iaLogin().auth === true ? (
                <div className="d-flex gap-3">
                  <Link to='/wishes' className="d-flex justify-content-center align-items-center gap-3 nav-icons"><Heart size={18} /> <span className="badge">{WishCount}</span></Link>
                  <Link to='/carts' className="d-flex justify-content-center align-items-center gap-3 nav-icons"><Cart size={18} /><span className="badge">{CartCount}</span></Link>
                  <Link to='/profile' className="d-flex justify-content-center align-items-center gap-3 nav-icons" title="Visit profile"><Person size={18} /></Link>
                  <Link onClick={LogoutHandler} className="d-flex justify-content-center align-items-center gap-3 nav-icons" title="Logout"><BoxArrowRight size={18} /></Link>
                </div>
              ) : ( <Link to='/login' className="d-flex justify-content-center align-items-center gap-3 nav-icons"> <BoxArrowInRight size={18} /> </Link> )
            }
          </div>

          {/* LEFT OFFCANVAS (MOBILE ONLY) */}
          <Navbar.Offcanvas id="offcanvasNavbar" placement="start" className="d-lg-none left-logo" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="logo d-flex"><sub>e</sub><h1>BAZAR</h1></div>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="flex-column fs-5 gap-2 main-menu">
                <Link  to="/" className={`${path === '' ? 'main-menu-active' : ''}`}>Home</Link>
                <Link to="/shop" className={`${path === 'shop' ? 'main-menu-active' : ''}`}>Shop</Link>
                <Link to="/about" className={`${path === 'about' ? 'main-menu-active' : ''}`}>About</Link>
                <Link to="/contact" className={`${path === 'contact' ? 'main-menu-active' : ''}`}>contact us</Link>
                <Link to="/faqs" className={`${path === 'faqs' ? 'main-menu-active' : ''}`}>FAQs</Link>
              </Nav>
              <Spacer size={25} />
              <div className="d-flex gap-4 mt-4 fs-4 header-icons">
                {
                  iaLogin().auth === true ? (
                    <div className="d-flex gap-3">
                      <Link to='/wishes' className="d-flex justify-content-center align-items-center gap-3 nav-icons"><Heart size={18} /> <span className="badge">{WishCount}</span></Link>
                      <Link to='/carts' className="d-flex justify-content-center align-items-center gap-3 nav-icons"><Cart size={18} /><span className="badge">{CartCount}</span></Link>
                      <Link to='/profile' className="d-flex justify-content-center align-items-center gap-3 nav-icons" title="Visit profile"><Person size={18} /></Link>
                      <Link onClick={LogoutHandler} className="d-flex justify-content-center align-items-center gap-3 nav-icons" title="Logout"><BoxArrowRight size={18} /></Link>
                    </div>
                  ) : ( <Link to='/login' className="d-flex justify-content-center align-items-center gap-3 nav-icons"> <BoxArrowInRight size={18} /> </Link> )
                }
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>

    </>
  );
};

export default Navigation;