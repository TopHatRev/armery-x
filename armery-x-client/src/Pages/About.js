import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://d1xw84ija6gjgy.cloudfront.net/production/fc325d4b598aaede18b53dca4ecfcb9c/conversions/HD.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-center text-5xl mt-20 mb-10 font-bold">About Armery-X</h1>
            <p className="mb-5 font-semibold text-xl">
              From the Scottish highlands to the Transilvanian mountains, the expert craftsmanship of old has since gone
              missing in our attire. Whether it be decorative or functional, we at Armery-X want to bring back the pride in
              our protection.
            </p>
            <br />
            <p className="font-semibold text-xl">
              We invite you to enjoy our craft as much as we do. Our blacksmiths all over Europe work tirelessly to provide
              the pinnacle in armour creation around the world.
            </p>
            <button className="btn btn-outline btn-primary mt-10">
              <Link to="/products">What we have to offer.</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://media.istockphoto.com/id/607898530/photo/blacksmith-manually-forging-the-molten-metal.jpg?s=612x612&w=0&k=20&c=XJK8AuqbsehPFumor0RZGO4bd5s0M9MWInGixbzhw48="
              alt="Blacksmith at work."
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Quality Assurance</h1>
              <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500">
                Armery-X was founded with a passion for medieval history and a desire to bring the beauty and functionality
                of authentic plate armour to a wider audience. We believe that owning a piece of medieval armour is not just
                a purchase, but an investment in a timeless piece of art. Our tradesmen assure us of the quality of their
                products themselves, however if you don't think that's assuring enough, we have an independent panel do their
                own tests whenever we launch a new product.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ytimg.com/vi/FM8M6b9zEx8/maxresdefault.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Three IMCF knights facing the camera."
            />
            <div>
              <h1 className="text-5xl font-bold">Tried and Tested</h1>
              <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500">
                Our team of skilled artisans and craftsmen bring centuries-old techniques to life, creating stunning and
                authentic pieces that are as beautiful as they are functional. Each piece is crafted with utmost attention to
                detail, using only the highest quality materials and techniques. Multiple HEMA associations such as the IMCF
                (International Medieval Combat Federation) have adopted our armour for competitions and for display.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://life-outdoors.co.uk/wp-content/uploads/2019/09/Committed-1.png"
              alt="Blacksmith at work."
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Customer Guarantee</h1>
              <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500">
                At Armery-X, we take great pride in our products and are committed to ensuring your satisfaction. We believe
                in standing behind our products and offering unparalleled customer support, so you can shop with confidence.
                Whether you are a collector, a history enthusiast, or a cosplayer, we have the perfect piece of armour for
                you.
              </p>
            </div>
          </div>
        </div>
        <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500 text-center mt-10 mb-10 font-semibold text-xl">
          Thank you for choosing Armery-X, where history meets modern-day design. We look forward to serving you and helping
          you take a step back in time and relive the glory of the knights and warriors of the past.
        </p>
      </div>
    </div>
  );
}
