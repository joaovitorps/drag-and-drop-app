import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: "8px",
            border: "1px solid lightgrey",
            marginBottom: "8px",
            borderRadius: "2px",
            backgroundColor:"white",
            ...provided.draggableProps.style
          }}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
