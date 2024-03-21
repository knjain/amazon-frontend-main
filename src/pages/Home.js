import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "../styles/Home.css";

import Product from "../components/Product";
import ProductList from "../components/ProductList";

import { listProducts } from "../actions/ProdcutActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-page-container">
      <div className="banner-container">
        <Slider {...settings}>
          <div className="banners">
            {/* <img src="https://refixya.com/assets/media/uploadmajor-brand/hp/hp-laptop-service-centre-kalyan/hp.png" alt=""/> */}
            <img
              src="https://m.media-amazon.com/images/I/61S1vOPq9tL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div className="banners">
            <img
              src="https://m.media-amazon.com/images/I/61swRHULKvL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div className="banners">
            <img
              src="https://m.media-amazon.com/images/I/51tz+FLdAhL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div className="banners">
            <img
              // src="https://cdn.shopify.com/s/files/1/1780/7915/files/Game_Monitor_6a7a1deb-2d61-4307-99ac-f8c5a18d298f.jpg?8000210842524768871"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheLordoftherings-Trailer/PV/3000x1200_Hero-Tall._CB631634134_.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>

      <ProductList />

      <div className="home-product-slider">
        <h2 className="sec-title">More Products</h2>

        <Slider {...settings2}>
          {products &&
            products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
