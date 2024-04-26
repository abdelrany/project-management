import React from "react";
import noProject from "../assets/no-projects.png";
import { Button } from "@/components/ui/button";

const NoProject = ({ onAdd }) => {
  return (
    <div className="flex flex-col gap-3 py-4 px-4 justify-center items-center w-full">
      <img src={noProject} alt="logo" className="size-40 mx-auto" />
      <p className="text-center text-gray-400">No projects yet</p>
      <p className="text-center text-gray-400">
        Create your first project to get started
      </p>
      <Button onClick={onAdd}>Create project</Button>
    </div>
  );
};

export default NoProject;
