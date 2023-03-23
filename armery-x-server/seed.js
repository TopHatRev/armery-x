const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./productModel");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new instance of a product object and add to the DB
  await Product.create({
    image_url:
      "https://www.rct.uk/sites/default/files/styles/rctr-scale-1300-500/public/collection-online/f/9/184851-1397743526.jpg?itok=FiIGIFdr",
    name: "Milanese Cuirass",
    gauge: 16,
    century: "16th",
    country: "Italy",
    price: "540",
  });
  await Product.create({
    image_url: "https://i.etsystatic.com/21443862/r/il/48db3c/3942817621/il_fullxfull.3942817621_nzkz.jpg",
    name: "German Sallet",
    gauge: 14,
    century: "Mid 15th",
    country: "Germany",
    price: "370",
  });
  await Product.create({
    image_url: "https://forgeofsvan.com/wp-content/uploads/2021/05/Bascinet-HoundSkull-with-Aventail-26.jpg",
    name: "Hounskull Bascinet",
    gauge: 14,
    century: "14th",
    country: "France",
    price: "450",
  });
  await Product.create({
    image_url: "https://images.metmuseum.org/CRDImages/aa/original/14.25.655_005may2015.jpg",
    name: "English Armet",
    gauge: 12,
    century: "16th",
    country: "England",
    price: "520",
  });
  await Product.create({
    image_url: "https://images.metmuseum.org/CRDImages/aa/original/DP22381.jpg",
    name: "Burgonet",
    gauge: 16,
    century: "16th - 17th",
    country: "Burgundy (France)",
    price: "495",
  });
  await Product.create({
    image_url: "https://cdn.shopify.com/s/files/1/0881/8278/products/20201126_144042_2_grande.jpg?v=1607647678",
    name: "Milanese Gauntlets",
    gauge: 16,
    century: "15th",
    country: "Italy",
    price: "180",
  });
  await Product.create({
    image_url: "https://live.staticflickr.com/65535/51393408227_110707a7ea_z.jpg",
    name: "Churburg Arm Harness",
    gauge: 14,
    century: "15th",
    country: "France",
    price: "270",
  });
  await Product.create({
    image_url:
      "https://steel-mastery.com/image/cache/cache/662001-663000/662800/main/ed30-9926Full_plate_legs,_part_of_full_plate_armor_(garniture)_of_George_Clifford,_end_of_the_XVI_century_-0-4-0-1-4-490x648.jpg",
    name: "Engraved Cuisses",
    gauge: 14,
    century: "15th",
    country: "Hungary",
    price: "500",
  });
  await Product.create({
    image_url:
      "https://steel-mastery.com/image/cache/cache/1-1000/507/additional/38f9-13Full_plate_Gothic_armor__XV_century-0-1-0-1-1-490x648.jpg",
    name: "Gothic Cuirass",
    gauge: 14,
    century: "15th",
    country: "Germany",
    price: "620",
  });
  console.log("Created a new product.");

  mongoose.disconnect();
}

seed();
