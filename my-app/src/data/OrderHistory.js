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
    id: 2,
    name: "Old Saigon-past ",
    type: "Vietnamese",
    cuisine: "Southeast Asian",
    price: 12,
    image: oldSaigonImg,
    location: "971 Industry Drive, Tukwila, WA",
    pickUpTime: "3:30 PM - 5:30 PM",
    vegan: "Vegan",
    glutenFree: "Gluten-Free",
    halal: "Contains Non-Halal Items",
    nutFree: "Contains Nuts",
    pickedUp: true
  }
];
