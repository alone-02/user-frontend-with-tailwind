import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import IdolList from "../Container/IdolList";
import CartItems from "./cartItems";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);

  const userId = Cookies.get("userId");
  const authToken = Cookies.get("authToken");
  //console.log("id :",userId, "token :",authToken);

  if (!userId || !authToken) {
    console.error("User is not authenticated. Missing token or userId.");
    return (
      <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600">404</p>
          <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/login"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </Link>
            <Link to="/explore" class="text-sm font-semibold text-gray-900">
              Go back home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
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

  //const [shippingCharge, setShippingCharge] = useState(5.00);
  //const [taxCharge, setTaxCharge] = useState(8.32);

  const shippingCharge = 10.0;
  const taxCharge = 5.0;

  const calculateTotal = (subtotal) => {
    return subtotal + shippingCharge + taxCharge;
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="grid grid-cols-2 gap4">
          {cart.cartItems.map((item) => (
            <CartItems
              key={item._id}
              id={item._id}
              title={item.product.title}
              thumbnail={item.product.thumbnail.image_url}
              price={item.product.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <p className="text-gray-700">Subtotal: ${cart.totalPrice}</p>
          <p className="text-gray-700">
            Shipping: ${shippingCharge.toFixed(2)}
          </p>
          <p className="text-gray-700">Tax: ${taxCharge.toFixed(2)}</p>
          <p className="text-xl font-bold">
            Total: ${calculateTotal(cart.totalPrice)}
          </p>
        </div>
      </div>
    </>
  );
}
export default Cart;
