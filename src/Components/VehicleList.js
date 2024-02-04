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
    <>
      <h4 className="admin-subtitle">
        <center>Vehicle Types</center>
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "2vw",
          marginLeft: "7vw",
        }}
      >
        {data.results.map((vehicle) => (
          <Card
            key={vehicle.uid}
            title={vehicle.name}
            style={{ width: 300 }}
            extra={
              <div
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  window.location.href = `/vehicleList/${vehicle.uid}`;
                }}
              >
                More Info
              </div>
            }
          >
            <Space direction="vertical">
              <p>UID: {vehicle.uid}</p>
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
    </>
  );
}
