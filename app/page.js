"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ProductDetails = dynamic(() => import("./productDetails"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    const target = document.getElementById("product");
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Online Website</h1>
      <h2>Welcome to the store!</h2>
      <p>Explore our latest product</p>

      <div id="product" style={{ height: "720px" }}>
        <h2>Our Products</h2>
        <p>Scroll down to see all the product details</p>
      </div>

      {show && <ProductDetails />}
    </div>
  );
}
