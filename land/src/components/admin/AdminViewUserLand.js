import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AdminViewUserLand = () => {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);

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

  return (
    <div>
      {user ? (
        <div>
          <h4>User Land Information</h4>
          <h4>Username: {user.username}</h4>
          <div style={{ height: "400px" }}>
            <MapContainer center={[0, 0]} zoom={10}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="OpenStreetMap"
              />
              {user.geom && <GeoJSON data={user.geom} />}
            </MapContainer>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminViewUserLand;
