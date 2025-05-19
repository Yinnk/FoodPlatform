import spiceBridgeImg from '../assets/img/spice-bridge.png';
import baiTongImg from '../assets/img/bai-tong.jpg';
import oldSaigonImg from '../assets/img/old-saigon.png';
//need to import every sigle imge used here 

export const OrderHistory = [
    {
      name: "Spice Bridge",
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
      type: "Thai",
      cuisine: "Southeast Asian",
      price: 18,
      image: baiTongImg,
      location: "16876 Southcenter Parkway, Tukwila, WA",
      pickUpTime: "5:00 PM - 7:00 PM",
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts",
      pickedUp: true
    },
    {
      name: "Old Saigon",
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