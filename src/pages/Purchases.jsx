import React, { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/Purchases/ProductPurchases";
import './style/purchase.css'
import Footer from "../components/footer/Footer";

const Purchases = () => {
  const { Purchases, getAllProductsPurchase } = usePurchases();

  useEffect(() => {
    getAllProductsPurchase();
  }, []);


  return (
    <>
        <div className="purchase">
      <h2 className="purchase_title">Mis Compras</h2>
      
      <div className="purchase_product">
         {Purchases?.map((prodPurchase) => (
        <ProductPurchases key={prodPurchase.id} product={prodPurchase} />
      ))}
      </div>
   
    </div>
    <br />
    <br />
    <Footer/>
    </>

  );
};

export default Purchases;
