import React, { useContext, useState } from "react";
import { IdolContext } from "../ContextApi/IdolContext";
import { useNavigate } from "react-router-dom";
import "./content.css"

function IdolList({ id, thumbnail, title, price }) {
  const { setIdolId, setIdolList } = useContext(IdolContext);
  
  const navigate = useNavigate();

  async function feature(id) {
    setIdolId({
      id: id,
      title: title,
      thumbnail : thumbnail,
      price: price
    });
    navigate(`/idoldetails`);
  }
 
  return (
    <>
      <div className="card_div"> 
        <div className="thumbnail">
          <img
            className="thumbnailImg"
            id={id}
            src={thumbnail}
            alt="thumbnail"
            onClick={() => feature(id)}
          ></img>
        </div>
        <div className="desc_div">
          <textarea
            className="desc_textarea"
            rows={1}
            value={title}
            readOnly
            onClick={() => feature(id)}
          >{title}</textarea>
          </div>
          <div className="price_div">
            <p className="price_para">Price : ₹{price}</p>
          </div>
        
        <button className="viewbtn" onClick={() => feature(id)}>
          {'View Details >>'}
        </button>
      </div>
    </>
  );
}

export default IdolList;


