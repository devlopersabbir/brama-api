import React from "react";
import "../../styles/header.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <div className="header__middle">
      <Container>
        <Row>
          <Col lg="4" md="3" sm="4">
            <div className="logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    BRAMA <br /> LOGO
                  </span>
                </Link>
              </h1>
            </div>
          </Col>

          <Col lg="6" md="6" sm="4">
            <div className="header__location d-flex align-items-center gap-2">
              <span>
                <i class="ri-earth-line"></i>
              </span>
              <div className="header__location-content">
                <h4>
                  {" "}
                  Bangladesh Refrigation & Airconditioning Merchents Association
                </h4>
              </div>
            </div>
          </Col>
          <Col
            lg="2"
            md="3"
            sm="0"
            className=" d-flex align-items-center justify-content-end "
          >
            <button className="header__btn btn ">
              <Link to="/contact">
                <i class="ri-phone-line"></i> Request a call
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Middle;
