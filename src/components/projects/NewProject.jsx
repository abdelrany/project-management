"use client";

import React, { useRef, useState } from "react";
import { Input, Button, Textarea } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NewProject = ({ onAdd, onClose }) => {
  const [date, setDate] = useState();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [open, setOpen] = React.useState(false);

  function handleSubmit() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: date,
    };
    if (project.title.trim() === "" || project.description.trim() === "") {
      return setOpen(true);
    }
    title.current.value = "";
    description.current.value = "";
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
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal ",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export { NewProject };
