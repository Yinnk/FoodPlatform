import spiceBridgeImg from '/assets/img/spice-bridge.png';
import baiTongImg from '/assets/img/bai-tong.jpg';
import smashImg from '/assets/img/smash.jpg';
import momonaImg from '/assets/img/momona.jpg';
import jayeImg from '/assets/img/jaye.jpg';
import elreyImg from '/assets/img/elrey.jpg';
import cloveImg from '/assets/img/clove.jpg';
import toreroImg from '/assets/img/torero.jpg';
import stoneImg from '/assets/img/stone.jpg';
import portImg from '/assets/img/port.jpg';
import stonehImg from '/assets/img/stoneh.jpg';
import bellaImg from '/assets/img/bella.jpg';
import umiImg from '/assets/img/umi.jpg';
import nickImg from '/assets/img/nick.jpg';
import seoulImg from '/assets/img/seoul.jpg';
import salimaImg from '/assets/img/salima.jpg';
import tasteImg from '/assets/img/taste.png';
import mazaImg from '/assets/img/maza.png';



export const restaurants = [
    {
      name: "Spice Bridge",
      type: "Food Hall",
      price: 15,
      image: spiceBridgeImg,
      description:"A bustling food court in Medina Mall featuring a rotating lineup of home-style dishes from across the globe.",
      location: "14200 Tukwila International Blvd, Tukwila, WA",
      pickUpTime: "4:00 PM - 6:00 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Vegan",
      glutenFree: "Contains Gluten",
      halal: "Halal",
      nutFree: "Nut-Free"
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
      nutFree: "Contains Nuts"
    },
    {
      name: "SMA5H",
      type: "American",
      price: 11,
      image: smashImg,
      description:"Halal burgers crafted with premium ingredients and expertly grilled, served in a relaxed, casual atmosphere.",
      location: "7101 Martin Luther King Jr Way S UNIT 107, Seattle, WA",
      pickUpTime: "3:30 PM - 5:30 PM",
      foodSurplus: "Low", // UI maps this to red star/icon
      vegan: "Not Vegan",
      glutenFree: "Contains Gluten",
      halal: "Halal",
      nutFree: "Nut-Free"
    },
    {
      name: "Momona Cafe & Restaurant",
      type: "African",
      price: 15,
      image: momonaImg,
      description:"Eritrean specialties like injera and hearty vegetarian dishes served in a cozy, unpretentious setting.",
      location: "96754 Martin Luther King Jr Way S, Seattle, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Vegan",
      glutenFree: "Contains Gluten",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Little Jaye",
      type: "American",
      price: 15,
      image: jayeImg,
      description:"A cozy neighborhood café serving up sandwiches, pastries, and more, all made with locally sourced ingredients.",
      location: "309 S Cloverdale St Suite A4, Seattle, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Low", // UI maps this to red star/icon
      vegan: "Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "El Rey Peruvian Restaurant",
      type: "Latin American",
      price: 15,
      image: elreyImg,
      description:"A warm and inviting restaurant offering authentic Peruvian favorites like lomo saltado and ceviche for both lunch and dinner.",
      location: "8515 14th Ave S, Seattle, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Low", // UI maps this to red star/icon
      vegan: "Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Clove Indian Cuisine",
      type: "South Asian",
      price: 15,
      image: cloveImg,
      description:"A new Indian restaurant led by world-renowned chef Manjit Singh Gill, serving modern interpretations of traditional dishes.",
      location: "829 N 10th St, Renton, WA",
      pickUpTime: "7:30 PM - 8:30 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Vegan",
      glutenFree: "Gluten-Free",
      halal: "Halal",
      nutFree: "Contains Nuts"
    },
    {
      name: "Torero's Cocina Mexicana & Cantina",
      type: "Latin American",
      price: 19,
      image: toreroImg,
      description:"A causal spot serving classic Mexican favorites like tacos and burritos, paired with refreshing flavored margaritas.",
      location: "920 N 10th St, Renton, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Maza Grill",
      type: "South Asian",
      price: 19,
      image: mazaImg,
      description:"An informal Pakistani kitchen dishing up halal steaks, classic traditional meals, and burgers in a cozy, laid-back setting.",
      location: "21000 108th Ave SE, Kent, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Halal",
      nutFree: "Contains Nuts"
    },
    {
      name: "Taste of Europe",
      type: "European",
      price: 19,
      image: tasteImg,
      description:"Variety of European foods, desserts, drinks, bakery items, and more.",
      location: "26011 104th Ave SE, Kent, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Salima Specialties",
      type: "Southeast Asian",
      price: 16,
      image: salimaImg,
      description:"A casual eatery in Skyway Park Shopping Center offering halal Pan-Asian favorites like pho, roti canai, and more.",
      location: "11805 Renton Ave S Suite C, Seattle, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "The Stonehouse Cafe",
      type: "American",
      price: 19,
      image: stonehImg,
      description:"Classic American fare, cocktails, and brunch served in a charming 1920s stone service station, complete with outdoor seating.",
      location: "9701 Rainier Ave S, Seattle, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Seoul Bowl",
      type: "East Asian",
      price: 19,
      image: seoulImg,
      description:"Seoul Bowl offers vibrant, healthy Korean BBQ bowls made with ethically sourced ingredients, customizable with your favorite flavors and topped with delicate sauces for a fresh, delicious escape from the everyday.",
      location: "13706 100th Ave NE, Kirkland, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Nick's Grill",
      type: "American",
      price: 19,
      image: nickImg,
      description:"A fun and relaxed Tex-Mex joint famous for its burritos, burgers, sandwiches, and other comfort food favorites.",
      location: "11613 124th Ave NE, Kirkland, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Low", // UI maps this to red star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Umi Cafe",
      type: "East Asian",
      price: 19,
      image: umiImg,
      description:"Contemporary Asian fusion dishes served with beer and wine in a charming space featuring a seasonal garden.",
      location: "80 SE Bush St, Issaquah, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "Tutta Bella Neapolitan Pizzeria",
      type: "European",
      price: 19,
      image: bellaImg,
      description:"Wood-fired Neapolitan pizzas and Italian favorites served in a modern, relaxed setting.",
      location: "715 NW Gilman Blvd, Issaquah, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Medium", // UI maps this to orange star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    },
    {
      name: "The Port Of Peri Peri",
      type: "African",
      price: 19,
      image: portImg,
      description:"A vibrant and flavorful Peri Peri spot known for its flame-grilled chicken, bold house-made sauces, and Portuguese-African inspired dishes with a spicy twist.",
      location: "22612 Bothell Everett Hwy Ste C, Bothell, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "High", // UI maps this to green star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Halal",
      nutFree: "Contains Nuts"
    },
    {
      name: "Stone Korean Restaurant",
      type: "East Asian",
      price: 21,
      image: stoneImg,
      description:"Introducing authentic Korean food to to community while providing the best customer service and the community welcomed us with open arms.",
      location: "24032 Bothell Everett Hwy #400, Bothell, WA",
      pickUpTime: "5:30 PM - 6:30 PM",
      foodSurplus: "Low", // UI maps this to red star/icon
      vegan: "Not Vegan",
      glutenFree: "Gluten-Free",
      halal: "Contains Non-Halal Items",
      nutFree: "Contains Nuts"
    }
    
  ];