
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { restaurants } from '../data/Restaurant.js';

// Metro Flex coverage zones (mocked coordinates for Tukwila, WA area)
const metroFlexZones = [
  [
    [47.4747, -122.2759],
    [47.4760, -122.2910],
    [47.4663, -122.2910],
    [47.4650, -122.2760]
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
          case "Old Saigon":
            coordinates = [47.4691, -122.2877];
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
