import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import db from "../firebase";
import "./PlanScreen.css";
function PlanScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("price").get();
          priceSnap.docs.foreach((price) => {
            products[productDoc.id].prices = {
              pricesId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.locaion.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        //show an error to customer and
        //inspect the cloud function logs in the firebase console
        alert(`An error occured:${error.message} `);

        if (sessionId) {
          //if you have a session let's redirect to the checkout
          //Init Stripe
          const stripe = await loadStripe(
            "pk_test_51IO9evKjiOFjp0yISQDn41CsP7jbR2821fl3bIDfFlwsdAnVAIqBRtk0VZ5ZdKyBxpkKNZ3FXSgAKO2cGaLFmLLX00MefJ1Rfz"
          );
          stripe.redirectToCheckout({ sessionId });
        }
      }
    });
  };
  return (
    <div className='planScreen'>
      {Object.entries(products).map(([productId, productData]) => {
        //logic to check that user subscription is active
        return (
          <div className='planScreen_plan'>
            <div className='planScreen_info'>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
