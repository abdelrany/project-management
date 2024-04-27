import React from "react";
import { Button } from "../ui";
import { NewTask } from ".";

export function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="flex flex-col gap-3">
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-gray-400 px-2"> No tasks has been created yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className="text-white justify-start items-center px-2 gap-3 space-y-2">
          {tasks?.map((task) => {
            return (
              <li
                key={task.id}
                className="flex gap-3 justify-between bg-stone-400 rounded-sm px-2 hover:bg-stone-700 hover:text-primary"
              >
                <span className=" self-center">{task.text}</span>
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
