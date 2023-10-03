import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "antd";
import Back from "./../Common/Back";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoivesData } from "../store/slice/MoviesDataSlice";
import Loading from "../Common/Loading";
import "../Stylesheet/_loading.css";

function Movies() {
  const [loading, setLoading] = useState(false);
  console.log(loading, "loading");
  const dispatch = useDispatch();
  const moviesDateFromRedux = useSelector((state) => state.movies);
  console.log(moviesDateFromRedux, "reduxData");

  useEffect(() => {
    dispatch(fetchMoivesData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeApiCall = async () => {
    await dispatch(fetchMoivesData());
    if (moviesDateFromRedux?.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ margin: "2em" }}>
        <center>
          
          <Back />
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
              makeApiCall();
            }}
          >
            Show Random People
          </Button>
        </center>
        <Row>
          {moviesDateFromRedux && moviesDateFromRedux?.data?.length > 0
            ? moviesDateFromRedux?.data?.map((e) => (
                <>
                  <Col
                    xxl={{ span: 8 }}
                    xl={{ span: 8 }}
                    lg={{ span: 8 }}
                    md={{ span: 12 }}
                    sm={{ span: 24 }}
                    xs={{ span: 24 }}
                    key={e?.id}
                  >
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
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {e?.primaryProfession ? e?.primaryProfession : "N/A"}
                        </span>
                      </h4>
                    </Card>
                  </Col>
                  <br />
                </>
              ))
            : "N?A"}
        </Row>
      </div>
      <Loading enableLoading={loading} />
    </>
  );
}

export default Movies;
