import React from "react";
import {RiDeleteBin6Fill} from "react-icons/ri"

function TaskList({ tasks }) {
  return (
    <div>
      <div className="tasklist--wrapper">
        {tasks && tasks.length > 0 ? tasks.map((task, index) => (
          <div key={index} className="task--item">
            <div>{task.title}</div>
            <RiDeleteBin6Fill style={{fontSize: "1.5rem", color: "red"}} />
          </div>
        )): <>
          <div>No Tasks to load.</div>
        </>}
      </div>
    </div>
  );
}

export default TaskList;
