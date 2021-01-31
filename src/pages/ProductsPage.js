import React from "react";
import Productsn from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";
import Products from "../components/ProductsPage/Products";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
