import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Sortable from "sortablejs";

export default function SortableComponent() {
  useEffect(() => {
    new Sortable(document.getElementById("example2Left"), {
      group: "shared",
      animation: 150,
    });

    new Sortable(document.getElementById("example2Right"), {
      group: "shared",
      animation: 150,
    });
  }, []);

  const leftContent = [
    { id: 0, title: "Item 1" },
    { id: 1, title: "Item 2" },
    { id: 2, title: "Item 3" },
    { id: 3, title: "Item 4" },
    { id: 4, title: "Item 5" },
    { id: 5, title: "Item 6" },
    { id: 6, title: "Item 7" },
  ];
  const rightContent = [
    { id: 7, title: "Item 8" },
    { id: 8, title: "Item 9" },
    { id: 9, title: "Item 10" },
    { id: 10, title: "Item 11" },
    { id: 11, title: "Item 12" },
    { id: 12, title: "Item 13" },
    { id: 13, title: "Item 14" },
  ];

  // http://sortablejs.github.io/Sortable/

  return (
    <center>
      <h2>Shared Lists</h2>
      <center>
        <Col span={2}>
          <Row justify={"space-between"}>
            <Col>
              <div id="example2Left" className="sortable-list">
                {leftContent.map((e) => (
                  <div key={e?.id} className="sortable-item">
                    {e.title}
                  </div>
                ))}
              </div>
            </Col>
            <Col>
              <div id="example2Right" className="sortable-list">
                {rightContent.map((e) => (
                  <div key={e?.id} className="sortable-item">
                    {e.title}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </center>
    </center>
  );
}
