import React, { useRef } from "react";
import { Input, Button, Textarea } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AddProject = ({ onAdd, onClose }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [open, setOpen] = React.useState(false);

  function handleSubmit() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    if (
      project.title.trim() === "" ||
      project.description.trim() === "" ||
      project.dueDate.trim() === ""
    ) {
      return setOpen(true);
    }
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
    onAdd(project);
  }

  return (
    <div className="flex flex-col gap-3 py-4 px-4 w-full">
      <Dialog open={open} onOpenChange={setOpen} onClose={() => onClose()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Oops ! Something went wrong</DialogTitle>
            <DialogDescription>Please fill all the fields</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <menu className="flex gap-3 justify-end items-center">
        <li>
          <Button size="sm" variant="ghost" onClick={onClose}>
            close
          </Button>
        </li>
        <li>
          <Button size="sm" onClick={handleSubmit}>
            save
          </Button>
        </li>
      </menu>
      <div className="flex flex-col gap-3">
        <Input ref={title} placeholder="Project Name" />
        <Textarea
          ref={description}
          placeholder="Project Description"
          textarea="true"
        />
        <Input ref={dueDate} placeholder="Project Due date" type="date" />
      </div>
    </div>
  );
};

export default AddProject;
