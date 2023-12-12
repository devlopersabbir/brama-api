import React from "react";
import "../../styles/header.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="header__top">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="6">
            <div className="header__top__left">
              <span>Need Help?</span>
              <span className="header__top__help">
                <i class="ri-phone-fill"></i> +880-2222262343
              </span>
            </div>
          </Col>

          <Col lg="8" md="6" sm="6">
            <div className="header__top__right d-flex align-items-center justify-content-end gap-4">
              <Link to="#" className=" d-flex align-items-center gap-1">
                <i className="ri-login-circle-line"></i> Login
              </Link>

              <Link to="#" className=" d-flex align-items-center gap-1">
                <i class="ri-user-line"></i> Register
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
