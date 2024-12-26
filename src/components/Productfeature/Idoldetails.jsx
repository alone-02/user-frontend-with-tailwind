import React, { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { IdolContext } from "../ContextApi/IdolContext";
import IdolList from "../Container/IdolList";
import "./featureIdol.css";
import { useNavigate } from "react-router-dom";


function Idoldetails() {
  const navigate = useNavigate();
  const { idolId, idolList } = useContext(IdolContext);

  const { id, title, thumbnail, price } = idolId;

  //console.log(idolId);
  // console.log("Cookies:", document.cookie);

  const userId = Cookies.get("userId");
  const authToken = Cookies.get("authToken");

  //console.log(userId);

  const addToCart = async (productId) => {
    try {
      if (!userId || !authToken) {
        console.error("User is not authenticated. Missing token or userId.");
        alert("Please Sign In");
        navigate( `/login`);
      }

      const response = await axios.post(
        `/api/products/cart/add_to_cart`,
        {
          cartItem: { productId: productId, quantity: 1 },
          user: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.status === 200) {
        alert(response.data.message);
      }

      console.log(result);
    } catch (err) {
      console.error(err.response);
    }
  };

  const addToOrder = async (productId) => {
    try {
      const response = await axios.post(
        `/api/products/order/place_order`,
        {
          orderItem: [{ productId: productId, quantity: 1 }],
          user: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const result = response.data;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="featureContainer">
        <div className="feature">
          <img
            className="featureImg"
            style={{
              borderRadius: "15px",
              border: "none",
              outline: "none",
              width: "640px",
              height: "500px",
            }}
            src={thumbnail}
          />
        </div>
        <div className="Detailsdiv">
          <div className="featuredetails">
            <div className="featureTitle">
              <textarea
                className="desc_textarea"
                rows={2}
                value={title}
                readOnly
                onClick={() => feature(id)}
              >
                {title}
              </textarea>
            </div>
            <div className="price_div">
              <p className="price_para">Price : ₹{price}</p>
            </div>
          </div>
          <div className="buybtn_div">
            <button className="buybtn" onClick={() => addToOrder(id)}>
              Book Now
            </button>
            <button className="buybtn" onClick={() => addToCart(id)}>
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="similardiv">
        <h2>Similar Idols</h2>
      </div>
      <div className="feautureList">
        {idolList.map((idol) => (
          <IdolList
            key={idol._id}
            id={idol._id}
            title={idol.title}
            thumbnail={idol.thumbnail.image_url}
            price={idol.price}
          />
        ))}
      </div>
    </>
  );
}

export default Idoldetails;
