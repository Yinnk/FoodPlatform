import spiceBridgeImg from "../assets/img/spice-bridge.png";
import baiTongImg from "../assets/img/bai-tong.jpg";
import oldSaigonImg from "../assets/img/old-saigon.png";

export const OrderHistory = [
  {
    id: 1,
    name: "Spice Bridge-past",
    type: "Food Hall",
    cuisine: "South Asian",
    price: 15,
    image: spiceBridgeImg,
    location: "14200 Tukwila International Blvd, Tukwila, WA",
    pickUpTime: "4:00 PM - 6:00 PM",
    vegan: "Vegan",
    glutenFree: "Gluten-Free",
    halal: "Halal",
    nutFree: "Nut-Free",
    pickedUp: true
  },
  {
    name: "Bai Tong Restaurant",
    type: "Southeast Asian",
    price: 18,
    image: baiTongImg,
    description:"Thai eatery serving flavorful curries, noodles, and more in a vibrant, stylish setting.",
    location: "16876 Southcenter Parkway, Tukwila, WA",
    pickUpTime: "5:00 PM - 7:00 PM",
    foodSurplus: "Medium", // UI maps this to orange star/icon
    vegan: "Not Vegan",
    glutenFree: "Gluten-Free",
    halal: "Contains Non-Halal Items",
    nutFree: "Contains Nuts",
    pickedUp: true
  },
  
];
