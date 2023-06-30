import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const Viewland = () => {
  const [shapefileData, setShapefileData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/shapefile')
      .then((response) => {
        console.log(response.data); // Log the response data
        setShapefileData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>Land owned by Zomba City</h3>
      <MapContainer center={[-15.3833, 35.3333]} zoom={12} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={shapefileData} />
      </MapContainer>
      <table>
        <thead>
          <tr>
            <th>GID</th>
            <th>Geometry</th>
          </tr>
        </thead>
        <tbody>
          {shapefileData.map((row) => (
            <tr key={row.gid}>
              <td>{row.gid}</td>
              <td>{JSON.stringify(row.geometry)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewland;
