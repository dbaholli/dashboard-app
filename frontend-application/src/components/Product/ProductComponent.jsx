import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiNetworkChart } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import "./product.scss";
import bill from "../../assets/bill.png";
import ProductView from "./ProductView";

const ProductComponent = () => {
  return (
    <div className='product-component component-layout'>
      {/* <div className='left-panel'>
        <div className='info'>
          <img src={bill} alt='Image' />
          <div className='user-details'>
            <h3>Sven Pietsch</h3>
            <p>Innoloft GmbH</p>
          </div>
        </div>
        <div className='panel-links'>
          <Link>
            <BiHomeAlt2 />
            Home
          </Link>
          <Link>
            <BsPeopleFill />
            Members
          </Link>
          <Link>
            <BiNetworkChart />
            Organizations
          </Link>
        </div>
      </div> */}
      <ProductView />
    </div>
  );
};

export default ProductComponent;
