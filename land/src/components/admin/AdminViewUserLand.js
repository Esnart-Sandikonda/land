import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import L from "leaflet";
import axios from "axios";

import "leaflet/dist/leaflet.css";

const AdminViewUserLand = () => {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/userview/${user_id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user_id]);

  useEffect(() => {
    if (user && !map) {
      const center = [user.latitude, user.longitude];

      // Create the map instance
      const leafletMap = L.map("map").setView(center, 13);

      // Add a tile layer to the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(leafletMap);

      // Add a marker to the map
      L.marker(center).addTo(leafletMap);

      setMap(leafletMap);
    }
  }, [user, map]);

  return (
    <div>
      {user ? (
        <div>
          <h4>User Land Information</h4>
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminViewUserLand;