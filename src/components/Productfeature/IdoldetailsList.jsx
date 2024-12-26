import React, { useState, useContext } from "react";
import { IdolContext } from "../ContextApi/IdolContext";
import { useNavigate } from "react-router-dom";
import "./featureIdol.css";

function IdoldetailsList({ id, thumbnail, title, price, description }) {
  const { setIdolId, setIdolList } = useContext(IdolContext);


  const navigate = useNavigate();

  async function player(id) {
    setIdolId({
      id: id,
      title: title,
      thumbnail : thumbnail,
      price: price
    });
    navigate(`/idolDetails/`);
  }


  return (
    <div className="featureListdiv">
      <img
        className="featureListImg"
        key={id}
        src={thumbnail}
        alt="thumbnail"
        onClick={() => player(id)}
      ></img>
      <div className="featureList-desc">
        <a onClick={() => player(id)}>
          <h3 className="featureList_Title">{title}</h3>
          <p className="price_para">Price : ₹{price}</p>
        </a>
      </div>
    </div>
  );
}

export default IdoldetailsList;
