import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  });
  //undefined = we are doing nothing, null = we are adding a new project

  function handleStaratAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;

  if(projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectID === undefined) {
    content= <NoProjectSelected onStartAddProject={handleStaratAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStaratAddProject}/>
      {content}
    </main>
  );
}

export default App;
