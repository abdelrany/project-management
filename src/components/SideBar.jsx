import React from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export const SideBar = ({
  projects,
  onAdd,
  onSelectProject,
  selectedProjectID,
}) => {
  return (
    <aside className="flex flex-col items-center w-1/3 bg-black gap-3 pt-6">
      <h2 className="text-sm md:text-lg font-bold text-gray-300 p-3">
        Create your project
      </h2>
      <Button variant="outline" size="sm" onClick={onAdd}>
        + Add project
      </Button>
      <ul className="flex flex-col w-full px-3 py-2">
        {projects.map((project, index) => {
          let cssClass = "";
          if (project.id === selectedProjectID) {
            cssClass += " bg-stone-800";
          } else {
            cssClass += " bg-black";
          }

          return (
            <li
              key={index}
              className={cn(
                "text-white justify-start hover:bg-slate-100 hover:text-black rounded-sm items-center",
                cssClass
              )}
            >
              <Button
                className="w-full justify-start"
                variant="ghost"
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
