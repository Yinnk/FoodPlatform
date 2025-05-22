
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../data/Restaurant.js';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const metroFlexZones = [
  // Tukwila
  [
    [47.4850, -122.3100],
    [47.4850, -122.2500],
    [47.4550, -122.2500],
    [47.4550, -122.3100]
  ],
  // Renton 
  [
    [47.5050, -122.2350],
    [47.5050, -122.1800],
    [47.4650, -122.1800],
    [47.4650, -122.2350]
  ],
  // Kent
  [
    [47.4150, -122.2550],
    [47.4150, -122.1900],
    [47.3700, -122.1900],
    [47.3700, -122.2550]
  ],
  // South Seattle 
  [
    [47.5550, -122.3100],
    [47.5550, -122.2500],
    [47.5150, -122.2500],
    [47.5150, -122.3100]
  ],
  // Issaquah 
  [
    [47.5550, -122.0700],
    [47.5550, -122.0100],
    [47.5200, -122.0100],
    [47.5200, -122.0700]
  ],
  // Bothell 
  [
    [47.8050, -122.2300],
    [47.8050, -122.1700],
    [47.7700, -122.1700],
    [47.7700, -122.2300]
  ],
  // Kirkland 
  [
    [47.75, -122.245],
    [47.75, -122.165],
    [47.69, -122.165],
    [47.69, -122.245]
  ]
];





export default function Map() {

  const navigate = useNavigate();
  const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([47.4747, -122.2759], 13); // Center near Tukwila

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      metroFlexZones.forEach(zone => {
        L.polygon(zone, {
          color: 'blue',
          weight: 2,
          fillOpacity: 0.2,
        }).addTo(map).bindPopup("Metro Flex Coverage Area");
      });

      restaurants.forEach((restaurant, index) => {
        let coordinates;
        switch (restaurant.name) {
          case "Spice Bridge":
            coordinates = [47.4747, -122.2759];
            break;
          case "Bai Tong Restaurant":
            coordinates = [47.4648, -122.2900];
            break;
          case "SMA5H":
            coordinates = [47.5373, -122.2842];
            break;
          case "Momona Cafe & Restaurant":
            coordinates = [47.5342, -122.2803];
            break;
          case "Little Jaye":
            coordinates = [47.5267, -122.3061];
            break;
          case "El Rey Peruvian Restaurant":
            coordinates = [47.5246, -122.3047];
            break;
          case "Clove Indian Cuisine":
            coordinates = [47.4936, -122.2046];
            break;
          case "Torero's Cocina Mexicana & Cantina":
            coordinates = [47.4937, -122.2040];
            break;
          case "Maza Grill":
            coordinates = [47.4102, -122.1989];
            break;
          case "Taste of Europe":
            coordinates = [47.3845, -122.2024];
            break;
          case "Salima Specialties":
            coordinates = [47.4837, -122.2565];
            break;
          case "The Stonehouse Cafe":
            coordinates = [47.5210, -122.2569];
            break;
          case "Seoul Bowl":
            coordinates = [47.7265, -122.2062];
            break;
          case "Nick's Grill":
            coordinates = [47.6984, -122.1741];
            break;
          case "Umi Cafe":
            coordinates = [47.5309, -122.0347];
            break;
          case "Tutta Bella Neapolitan Pizzeria":
            coordinates = [47.5431, -122.0442];
            break;
          case "The Port Of Peri Peri":
            coordinates = [47.7953, -122.2047];
            break;
          case "Stone Korean Restaurant":
            coordinates = [47.7915, -122.2063];
            break;
          default:
            return;
        }

        const marker = L.marker(coordinates).addTo(map);
        const buttonId = `learn-more-${index}`;
        marker.bindPopup(`
          <div style="text-align: center;">
            <img src="${restaurant.image}" alt="${restaurant.name}" width="100px" style="border-radius: 8px;" /><br/>
            <b>${restaurant.name}</b><br>
            Type: ${restaurant.type}<br>
            Price: $${restaurant.price}<br>
            Food Surplus: ${restaurant.foodSurplus}<br>
            <button id="${buttonId}" style="margin-top: 5px; padding: 5px 10px; background-color: #003559; color: white; border: none; border-radius: 5px; cursor: pointer;">
              Learn More
            </button>
          </div>
        `);

        marker.on('popupopen', () => {
          setTimeout(() => {
            const button = document.getElementById(buttonId);
            if (button) {
              button.addEventListener('click', () => {
                navigate('/restaurantpage', { state: { restaurant } });
              });
            }
          }, 0); // Delay to ensure DOM is ready
        });
      });



      // Enable zoom and pan
      map.scrollWheelZoom.enable();
    }
  }, [navigate]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
}
