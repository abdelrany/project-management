import React from "react";
import NewTask from "./NewTask";
import { Button } from "./ui";

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="flex flex-col gap-3">
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p> No tasks yet</p>}
      {tasks.length > 0 && (
        <ul className="flex flex-col text-black bg-slate-400 rounded-sm  ">
          {tasks?.map((task) => {
            return (
              <li
                key={task.id}
                className="flex gap-3 justify-between  border px-2"
              >
                <span className="text-gray-600 self-center">{task.text}</span>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:bg-inherit"
                  onClick={() => onDelete(task.id)}
                >
                  X
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
