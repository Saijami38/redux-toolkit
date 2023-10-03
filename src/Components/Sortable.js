import { Card } from "antd";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Back from "../Common/Back";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

export default function Sortable() {
  const [data, setData] = useState(finalSpaceCharacters);
  console.log(data, "data");

  const handleOnDragEnd = (result) => {
    console.log(result, "result");
    if (result.destination) {
      const items = Array.from(data);
      const [reorderedItem] = items.splice(result.source.index, 1);
      console.log(reorderedItem, "reorderedItem");
      items.splice(result.destination.index, 0, reorderedItem);
      setData(items);
    }
  };

  return (
    <div className="App-header">
      <div style={{ margin: "2em" }}>
        <center>
          <Back />
        </center>
      </div>

      <h1>Final Space Characters</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="characters-thumb"></div>
                        <p>{name}</p>
                      </Card>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
