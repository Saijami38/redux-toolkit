import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Descriptions } from "antd";
import Back from "../Common/Back";

export default function VehicleListDetails(props) {
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    let id = window.location.pathname.split("/vehicleList/")[1];

    axios
      .get(`https://www.swapi.tech/api/vehicles/${id}`)
      .then((response) => {
        setVehicleData(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ margin: "2em", minHeight: "100vh" }}>
        <center>
          <Back />
          <br />
          {vehicleData ? (
            <Card title={vehicleData.properties.name}>
              <Descriptions title="Vehicle Details">
                <Descriptions.Item label="Model">
                  {vehicleData.properties.model}
                </Descriptions.Item>
                <Descriptions.Item label="Class">
                  {vehicleData.properties.vehicle_class}
                </Descriptions.Item>
                <Descriptions.Item label="Manufacturer">
                  {vehicleData.properties.manufacturer}
                </Descriptions.Item>
                <Descriptions.Item label="Cost (in credits)">
                  {vehicleData.properties.cost_in_credits}
                </Descriptions.Item>
                <Descriptions.Item label="Length">
                  {vehicleData.properties.length}
                </Descriptions.Item>
                <Descriptions.Item label="Crew">
                  {vehicleData.properties.crew}
                </Descriptions.Item>
                <Descriptions.Item label="Passengers">
                  {vehicleData.properties.passengers}
                </Descriptions.Item>
                <Descriptions.Item label="Max Speed">
                  {vehicleData.properties.max_atmosphering_speed}
                </Descriptions.Item>
                <Descriptions.Item label="Cargo Capacity">
                  {vehicleData.properties.cargo_capacity}
                </Descriptions.Item>
                <Descriptions.Item label="Consumables">
                  {vehicleData.properties.consumables}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ) : (
            <div>Loading...</div>
          )}
        </center>
      </div>
    </>
  );
}
