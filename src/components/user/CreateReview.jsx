import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { StarFill, Star, MapFill, Map, GeoAltFill } from "react-bootstrap-icons";
import ProductStore from "../../store/ProductStore";
import { getToken } from "../../utility/Storage";
import { ErrorMSG, SuccessMSG } from '../../utility/MessageHelper';
const User = 'https://devs-rocky.netlify.app/static/media/Rabiul%20dark.afe5120e065438827d60.png';

export default function CreateReview({ ProductId, setPopup }) {

  let token = getToken();
  const [rating, setRating] = useState(0);
  const {ReviewList, CreateReviewRequest} = ProductStore();
  const [Description, setDescription] = useState('');

  const PublishReview = async () => {
    let postBody = { productID: ProductId, des: Description, rating: rating }
    let res = await CreateReviewRequest(postBody, token);
    setPopup('');
    if(res === true){
      SuccessMSG("Review published!")
    }else if(res.status === 'exist'){
      ErrorMSG(res.message)
    }
  }

  return (
    <Col>
      <div className="reviews pt-2" style={{padding: '0px 35px'}}>
        {/* <h2>Exist customer reviews</h2> */}
        <ul className="p-0 " style={{listStyle: 'none'}}>
          {
            ReviewList?.map((item, index) => {
              return (
                <li key={index.toString()}>
                  <div className="d-flex gap-2">
                    <img src={User} alt='User' />
                    <div className="about-cust">
                      <h3 className="p-0 m-0">{item['name']}</h3>
                      <span><GeoAltFill  /> {item['City']}</span>
                    </div>
                  </div>
                  <hr style={{color: 'var(--clr-gray)'}} />
                  <div className="client-feedback">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          {
                            Array.from({length: item['rating']}).map((_, index) => {
                              return (
                                <StarFill size={18} key={index} color="gold"/>
                              )
                            })
                          }
                        </span>
                        <span>{item['rating']}</span>
                      </div>
                      <p>{item['des']}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="feedback" style={{padding: '0px 35px'}}>
        <h3 className="feed-title">Share your experience</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}  style={{ cursor: "pointer", fontSize: "26px", marginRight: "6px", transition: "0.2s" }}
            onClick={() => setRating(star)}>
            {star <= rating ? ( <StarFill size={20} color="gold" />) : (  <Star size={20} style={{color: 'var(--bg-primary)'}} /> )}
          </span>
        ))}
        <div className="d-flex flex-column mt-2">
          <textarea onChange={(e) => {setDescription(e.target.value)}} placeholder="Tell us something about the product"></textarea>
          <button onClick={() => {PublishReview()}} className="feed-btn mt-2">Publish Feedback</button>
        </div>
      </div>
    </Col>
  );
}
