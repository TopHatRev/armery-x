import React, { useEffect, useRef, useState } from "react";
import "./AnimCard.css";
import { useCart } from "react-use-cart";

const SlideInAnimation = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const node = ref.current;
      const top = node.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top <= windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { addItem } = useCart();
  return (
    <div className="product-container">
      <div className={`slide-in ${isVisible ? "visible" : ""}`} ref={ref}>
        <section className="product-card">
          <div className="card w-96 glass">
            <figure>
              <img src={product.image_url} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>Century: {product.century}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Price: £{product.price}</div>
                <div className="badge badge-outline">Gauge: {product.gauge}</div>
                <div className="badge badge-outline">Country: {product.country}</div>
                <button className="btn btn-outline btn-primary" onClick={() => addItem({ ...product, id: product._id })}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlideInAnimation;
