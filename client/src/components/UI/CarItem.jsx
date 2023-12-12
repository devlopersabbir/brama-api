import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import moment from "moment";

const CarItem = ({ item }) => {
  console.log(item);
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={item?.image} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{item?.title}</h4>
          <h6 className="rent__price text-center mt-">
            {/* how data */}
            <span>{moment(item.createdAt).format("l")}</span>
          </h6>
          {/* TODO
make slug and able to switch
*/}
          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${item.slugs}`}>Event</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${item.slugs}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
