import { useState } from "react";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateID: undefined,
    projects: [],
    tasks: [],
  });
  console.log("🚀 ~ App ~ projectState:", projectState.tasks);

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      console.log(
        "lll",
        prevState.tasks.filter((task) => task.id != id)
      );
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id != id),
      };
    });
    console.log(projectState.tasks);
  }

  function handleSetProjectState(project) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prevState,
        projectStateID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleOpenProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateID: null,
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateID: id,
      };
    });
  }

  function handleCloseProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateID: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== id),
        projectStateID: undefined,
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.projectStateID
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectState?.tasks}
      onAdd={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.projectStateID === null) {
    content = (
      <NewProject onAdd={handleSetProjectState} onClose={handleCloseProject} />
    );
  } else if (projectState.projectStateID === undefined) {
    content = <NoProject onAdd={handleOpenProject} />;
  }

  return (
    <main className="flex h-screen w-full">
      <SideBar
        onAdd={handleOpenProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectID={projectState.projectStateID}
      />
      {content}
    </main>
  );
}

export default App;
