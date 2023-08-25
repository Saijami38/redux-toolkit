import React, { useEffect, useState } from "react";
import { Card, Col, Button } from "antd";
import axios from "axios";

function Movies() {
  const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;

  const [moivesData, setMoivesData] = useState([]);
  console.log(moivesData, "moivesData");
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/actors/random",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMoivesData(response.data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <center>
        <Button
          style={{
            backgroundColor: "#abc4ff",
            color: "white",
            border: "none",
            margin: "5px",
            borderRadius: "5px",
            transition: "background-color 0.5 ease",
          }}
          onClick={() => {
            fetchMovies();
          }}
        >
          Show Random People
        </Button>
      </center>
      <Col>
        {moivesData.length > 0
          ? moivesData.map((e) => (
              <>
                <Card
                  key={e?.primaryName}
                  style={{
                    padding: "20px",
                    borderRadius: "5px",
                    margin: "15px",
                    backgroundColor: "#cbf0f8",
                  }}
                >
                  <h4>Name : {e?.primaryName}</h4>
                  <h4
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    Profession :{" "}
                    <span
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {e?.primaryProfession ? e?.primaryProfession : "N/A"}
                    </span>
                  </h4>
                </Card>
                <br />
              </>
            ))
          : "N?A"}
      </Col>
    </div>
  );
}

export default Movies;
