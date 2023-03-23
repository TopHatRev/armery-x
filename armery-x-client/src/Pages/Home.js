import React from "react";
import ImgCard1 from "../Images/ImgCard1.jpeg";
import CarouselImg1 from "../Images/CarouselImg1.jpeg";
import CarouselImg2 from "../Images/CarouselImg2.jpeg";
import CarouselImg3 from "../Images/CarouselImg3.jpeg";
import CarouselImg4 from "../Images/CarouselImg4.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="carousel mt-20">
        <div className="carousel-item">
          <img src={ImgCard1} alt="Cuirass" />
        </div>
        <div className="carousel-item">
          <img src={CarouselImg1} alt="Engraved armour." />
        </div>
        <div className="carousel-item">
          <img src={CarouselImg2} alt="Mounted knight" />
        </div>
        <div className="carousel-item">
          <img src={CarouselImg3} alt="Engraved mounted knight" />
        </div>
        <div className="carousel-item">
          <img src={CarouselImg4} alt="Detailed cuirass and arm harness." />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center mt-5 mb-5">Armery-X</h1>
      <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-600 ml-5 mr-5">
        Welcome to Armery-X, the ultimate destination for medieval plate armour enthusiasts and collectors! We are proud to
        offer a wide range of meticulously crafted pieces that pay homage to the glory and craftsmanship of the past. Our
        armour is not just a functional protective gear, but a work of art that combines beauty and functionality.
      </p>
      <br />
      <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-600 ml-5 mr-5">
        Each piece is designed with utmost attention to detail, using only the highest quality materials and techniques.
        Whether you are a history buff, a reenactor, or simply appreciate the beauty of medieval armour, Armery-X has
        something for everyone. From full suits of armour to helmets, gauntlets, and greaves, we offer an extensive selection
        of pieces to suit your needs.
      </p>
      <br />
      <p className="tracking-normal leading-relaxed text-grey-400 md:text-lg dark:text-gray-600 mb-10 ml-5 mr-5">
        Our team of skilled artisans and craftsmen bring centuries-old techniques to life, creating stunning and authentic
        pieces that are as beautiful as they are functional. We believe that owning a piece of medieval armour is not just a
        purchase, but an investment in a timeless piece of art. At Armery-X, we are committed to providing our customers with
        the highest level of service and satisfaction. We believe in standing behind our products and offering unparalleled
        customer support, so you can shop with confidence.
      </p>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2021/05/6e4e76d8012392420420a0dcc9e989b5.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-center text-5xl mt-20 mb-10 font-bold">Notable Information</h1>
            <p className="mb-5 font-semibold text-xl">
              We understand that many new customers and enthusiasts may not be familiar with the terminology or the figures
              that we present. Hopefully this following section will provide a compact education.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.steelsupplylp.com/uploads/general/_1200x630_crop_center-center_82_none/plate.jpg?mtime=1627498808"
            alt="A pile of mild steel plates."
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Steel Gauge and Armour Thickness</h1>
            <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500">
              Plate armour thickness varied depending on the specific piece and its intended purpose. Generally, the
              thickness of plate armour ranged from 1.5mm to 3mm, although some pieces could be up to 6mm thick. The
              thickness of the steel used in plate armour was often measured in gauges, with a lower gauge indicating a
              thicker steel plate. In medieval Europe, the quality of plate armour was highly valued and reflected a person's
              status and wealth. Higher-quality armour was typically made from high-carbon steel, which was harder and more
              durable than lower-quality steel. The steel was also often tempered and hardened to increase its strength and
              resistance to damage. The forging process and the quality of craftsmanship also played a significant role in
              determining the quality of the armour.
            </p>
            <br />
            <p>12 Gauge = 2.6mm 14 Gauge = 2mm 16 Gauge = 1.6mm 18 Gauge = 1.2mm</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://cdn.britannica.com/11/91511-050-6B4D60DA/development-body-armour-Western.jpg"
            alt="A chart showing the evolution of medieval armour."
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">The Evolution of Armour</h1>
            <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500">
              The middle ages were a constant arms race, much like the cold war, but instead of nuclear bombs and stealth
              recon aircraft, the kingdoms of medieval Europe were constantly competing to have the best plate armour.
            </p>
            <br />
            <p className="tracking-normal leading-relaxed text-grey-500 md:text-lg dark:text-gray-500">
              Armour quality was constantly improving, as was design, from the Great Helms of the Crusades with their minimal
              visibility, poor protection and limited mobility, to the close helms and armets of the 16th Century. With new
              advents in armour, there of course came improvements in weaponry, swords becoming obsolete in the face of steel
              plate armour and hammers and maces coming into favour, the development never stopped until the introduction of
              gunpowder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
