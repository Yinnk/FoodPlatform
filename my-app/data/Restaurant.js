import spiceBridgeImg from '/assets/img/spice-bridge.png';
import baiTongImg from '/assets/img/bai-tong.jpg';
import oldSaigonImg from '/assets/img/old-saigon.png';
//need to import every sigle imge used here 

export const restaurants = [
    {
      name: "Spice Bridge",
      type: "Food Hall",
      price: 15,
      image: spiceBridgeImg,
      description:"xxx",
      location: "14200 Tukwila International Blvd, Tukwila, WA",
      pickUpTime: "4:00 PM - 6:00 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Vegan",
      glutenFree: "Gluten-Free",
      halal: "Halal",
      nutFree: "Nut-Free"
    },
    {
      name: "Bai Tong Restaurant",
      type: "Thai",
      price: 18,
      image: baiTongImg,
      description:"xxx",
      location: "16876 Southcenter Parkway, Tukwila, WA",
      pickUpTime: "5:00 PM - 7:00 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Old Saigon",
      type: "Vietnamese",
      price: 12,
      image: oldSaigonImg,
      description:"xxx",
      location: "971 Industry Drive, Tukwila, WA",
      pickUpTime: "3:30 PM - 5:30 PM",
      foodSurplus: "Low", // UI maps this to red star/icon
      vegan: "Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    }
  ];