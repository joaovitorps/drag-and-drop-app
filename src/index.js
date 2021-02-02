import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./initial-data";
import Column from "./Column";

const App = () => {
  // const onDragEnd = (result) => {
  //   return;
  // };

  return (
    <DragDropContext onDragEnd={() => {}}>
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.colums[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
