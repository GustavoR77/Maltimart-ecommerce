import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/ribeiro/boiler-1.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [boilerProducts, setBoilerProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "boiler"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "boiler"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "boiler"
    );

    const filteredBoilerProducts = products.filter(
      (item) => item.category === "boiler"
    );

    const filterePopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setBoilerProducts(filteredBoilerProducts);
    setPopularProducts(filterePopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle mobile__center">
                  Produto em alta {year}
                </p>
                <h2>Por que devo automatizar meu aquecedor solar?</h2>
                <p>
                  O aquecedor de água com energia solar é a melhor maneira de
                  economizar energia elétrica (e dinheiro) e ainda assim ter a
                  água sempre quente no chuveiro ou torneira, pois o processo de
                  aquecimento ocorre por meio do calor do Sol, que é uma fonte
                  de energia gratuita e que não prejudica o meio ambiente.
                </p>
                <div className=" mobile__center">
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                    <Link to="/shop">COMPRAR AGORA</Link>
                  </motion.button>
                </div>
              </div>
            </Col>

            <Col lg="5" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="tranding__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Produtos em Alta</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Carregando.....</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>

      {/* <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Mais Vendidos</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">.....</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
            </section> */}
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductsList data={mobileProducts} />
            )}
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductsList data={wirelessProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductsList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
