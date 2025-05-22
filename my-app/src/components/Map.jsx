
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { restaurants } from '../data/Restaurant.js';

// Metro Flex coverage zones (mocked coordinates for Tukwila, WA area)
const metroFlexZones = [
  // Tukwila
  [
    [47.4747, -122.2759],
    [47.4760, -122.2910],
    [47.4663, -122.2910],
    [47.4650, -122.2760]
  ],
  // Renton
  [
    [47.4930, -122.2150],
    [47.4930, -122.2000],
    [47.4780, -122.2000],
    [47.4780, -122.2150]
  ],
  // Kent
  [
    [47.4000, -122.2300],
    [47.4000, -122.2100],
    [47.3850, -122.2100],
    [47.3850, -122.2300]
  ],
  // South Seattle
  [
    [47.5375, -122.2850],
    [47.5375, -122.2650],
    [47.5220, -122.2650],
    [47.5220, -122.2850]
  ],
  // Issaquah
  [
    [47.5435, -122.0500],
    [47.5435, -122.0300],
    [47.5300, -122.0300],
    [47.5300, -122.0500]
  ],
  // Bothell
  [
    [47.7955, -122.2150],
    [47.7955, -122.1950],
    [47.7800, -122.1950],
    [47.7800, -122.2150]
  ],
  // Kirkland
  [
    [47.7270, -122.2150],
    [47.7270, -122.1950],
    [47.7100, -122.1950],
    [47.7100, -122.2150]
  ]
];


export default function Map() {
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

      restaurants.forEach(restaurant => {
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
            coordinates = [47.5267, -122.3261];
            break;
          case "El Rey Peruvian Restaurant":
            coordinates = [47.5246, -122.3147];
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
        marker.bindPopup(`
          <div style="text-align: center;">
            <img src="${restaurant.image}" alt="${restaurant.name}" width="100px" style="border-radius: 8px;" /><br/>
            <b>${restaurant.name}</b><br>
            Type: ${restaurant.type}<br>
            Price: $${restaurant.price}<br>
            Food Surplus: ${restaurant.foodSurplus}<br>
            <a href="/RestaurantPage"
              style="margin-top: 5px; display: inline-block; padding: 5px 10px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
              Learn More
            </a>
          </div>
        `);
      });


      // Enable zoom and pan
      map.scrollWheelZoom.enable();
    }
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
}
