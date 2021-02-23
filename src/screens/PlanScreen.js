import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlanScreen.css";
function PlanScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.refcollection("price").get();
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
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
