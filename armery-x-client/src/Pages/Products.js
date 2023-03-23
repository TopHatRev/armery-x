import React from "react";
import "./Products.css";
import ProductHero from "../Images/ProductHero.jpeg";
import AnimCard from "../Components/AnimCard";

export default function Products({ products }) {
  console.log(products);
  return (
    <div>
      <div className="hero min-h-screen bg-base-300 mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={ProductHero} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">The Armery Collection</h1>
            <p className="py-6">
              Step into the world of medieval knights and warriors with Armery-X's exquisite collection of plate armour. Our
              products are a perfect blend of history, craftsmanship, and modern-day design, making them the perfect addition
              to any collection or reenactment.
            </p>
            <br />
            <p>
              Each of our products is crafted using traditional methods and only the highest quality materials, such as
              stainless steel, brass, and leather. Our artisans and craftsmen take great care in ensuring that every product
              meets the highest standards of quality and authenticity.
            </p>
            <br />
            <p>
              Our products are not only beautiful but also functional. They provide excellent protection and are built to
              withstand the rigors of combat and the test of time. Whether you are looking for a piece for display or for
              actual use, our products are sure to meet your needs.
            </p>
          </div>
        </div>
      </div>
      {products.map((product) => {
        return <AnimCard product={product} />;
      })}
    </div>
  );
}
