import React from "react";
import { Button } from "./ui/button";
import Tasks from "./Tasks";

function SelectedProject({ project, onDelete, tasks, onAdd, onDeleteTask }) {
  const formatDate = new Date(project?.dueDate).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-3 py-4 px-4 items-start w-full ">
      <header className="text-xl font-semibold w-2/4">
        <div className="flex flex-row justify-between">
          <h2 className="text-sm md:text-lg font-bold text-gray-600 p-3">
            {project?.title}
          </h2>
          <Button variant="ghost" onClick={() => onDelete(project?.id)}>
            Delete
          </Button>
        </div>
      </header>

      <p className="text-center text-gray-600 whitespace-pre-wrap">
        {project?.description}
      </p>
      <p className="text-center text-gray-600 ">{formatDate}</p>
      <div className="divider" />
      <Tasks tasks={tasks} onAdd={onAdd} onDelete={onDeleteTask} />
    </div>
  );
}

export default SelectedProject;
