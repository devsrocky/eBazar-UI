import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

import ProductStore from "../../store/ProductStore";

const ProductImage = () => {
  const { ProductDetails } = ProductStore();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const details = ProductDetails?.[0]?.details;
  if (!details) return null;

  const images = [
    details?.img1,
    details?.img2,
    details?.img3,
    details?.img4,
    details?.img5,
  ].filter(Boolean);

  return (
    <div>
      {/* Main Image Slider */}
      <Swiper modules={[Thumbs, Autoplay]} thumbs={{ swiper: thumbsSwiper }} spaceBetween={10} className="main-swiper">
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`product-${index}`} style={{ width: "100%", borderRadius: "10px" }}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} watchSlidesProgress className="thumb-swiper" style={{ marginTop: "10px" }} >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`thumb-${index}`} style={{ width: "100%", cursor: "pointer", borderRadius: "6px" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImage;