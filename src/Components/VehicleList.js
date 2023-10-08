import React, { useEffect, useState } from "react";
import { Card, Space, Button } from "antd";
import axios from "axios";

export default function VehicleList() {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    axios
      .get("https://www.swapi.tech/api/vehicles?page=1&limit=10")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "7vw",
        marginLeft: "7vw",
      }}
    >
      {data.results.map((vehicle) => (
        <Card
          key={vehicle.uid}
          title={vehicle.name}
          style={{ width: 300 }}
          extra={<a href={vehicle.url}>More Info</a>}
        >
          <Space direction="vertical">
            <p>UID: {vehicle.uid}</p>
            {/* <p>
              URL:
              {vehicle.url}
            </p> */}
          </Space>
        </Card>
      ))}

      <Button
        onClick={() => {
          window.location.href = `${data?.next}`;
        }}
      >
        Next
      </Button>
    </div>
  );
}
