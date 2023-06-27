import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import wellknown from 'wellknown';

const Viewland = () => {
  const [shapefileData, setShapefileData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/shapefile')
      .then((response) => {
        console.log(response.data); // Log the response data
        const shapefileFeatures = response.data.map((row) => {
          const geometry = wellknown.parse(row.wkt);
          return {
            gid: row.gid,
            geometry,
          };
        });
        setShapefileData(shapefileFeatures);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>Land owned by zomba city</h3>
      <MapContainer center={[0, 0]} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {shapefileData.map((feature) => (
          <Polygon key={feature.gid} positions={feature.geometry.coordinates} />
        ))}
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
