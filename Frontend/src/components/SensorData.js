import React from 'react';
import { Card, Table } from 'react-bootstrap';

const SensorData = ({ data }) => {
  return (
    <Card className="mt-4">
      <Card.Header>Sensor Data</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Soil Moisture</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.soilMoisture}</td>
                <td>{item.temperature}</td>
                <td>{item.humidity}</td>
                <td>{new Date(item.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SensorData;