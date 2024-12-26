import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import IdolList from "../Container/IdolList";
import cartItems from "./cartItems";

function Cart() {
  const [cart, setCart] = useState(null);

  const userId = Cookies.get("userId");
  const authToken = Cookies.get("authToken");
  //console.log("id :",userId, "token :",authToken);

  if (!userId || !authToken) {
    console.error("User is not authenticated. Missing token or userId.");
    return (
      <div className="bg-blue-500 text-white p-4">
        Please Sign In.
      </div>
    );
  }

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await axios.get(
          `/api/products/cart/${userId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        // console.log(response.data);
        if (response.status === 200) {
          setCart(response.data);
        }

        //console.log("cart",cart.cartItems);
      } catch (err) {
        console.error(err.response.data);
      }
    }
    fetchCart();
  }, []);

  if (!cart) {
    return <h1>Loading...</h1>;
  }

  if (cart.cartItems.length === 0) {
    return <h1>Cart Is Empty</h1>;
  }

  return (
    <>
      {cart.cartItems.map((item) => (
        <IdolList
          key={item._id}
          id={item._id}
          title={item.product.title}
          thumbnail={item.product.thumbnail.image_url}
          price={item.product.price}
          quantity={item.quantity}
          totalPrice={cart.totalPrice}
        />
      ))}
      <h2>{cart.totalPrice}</h2>
    </>
  );
}
export default Cart;
