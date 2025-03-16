import { useState, useEffect } from "react";
import useAdminStore from "../store/useAdminStore";
import ExperienceComponent from "../components/ExperienceComponent.jsx";
import EducationComponent from "../components/EducationComponent.jsx";
import ProjectComponent from "../components/ProjectComponent.jsx";

const AdminPanel = () => {
  const { experiences, fetchExperiences, education, fetchEducation, projects, fetchProjects, deleteExperience, deleteEducation, deleteProject } = useAdminStore();
  const [tab, setTab] = useState("experience");

  useEffect(() => {
    fetchExperiences();
    fetchEducation();
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-100">
      <div className="w-full max-w-6xl p-6 bg-white shadow-md rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Paneli</h1>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 my-4">
          <button onClick={() => setTab("experience")} className={`px-4 py-2 rounded ${tab === "experience" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}>Deneyimler</button>
          <button onClick={() => setTab("education")} className={`px-4 py-2 rounded ${tab === "education" ? "bg-green-600 text-white" : "bg-gray-300 text-black"}`}>Eğitim</button>
          <button onClick={() => setTab("projects")} className={`px-4 py-2 rounded ${tab === "projects" ? "bg-purple-600 text-white" : "bg-gray-300 text-black"}`}>Projeler</button>
        </div>

        {/* Render the appropriate tab content */}
        {tab === "experience" && <ExperienceComponent experiences={experiences} fetchExperiences={fetchExperiences} deleteExperience={deleteExperience} />}
        {tab === "education" && <EducationComponent education={education} fetchEducation={fetchEducation} deleteEducation={deleteEducation} />}
        {tab === "projects" && <ProjectComponent projects={projects} fetchProjects={fetchProjects} deleteProject={deleteProject} />}
      </div>
    </div>
  );
};

export default AdminPanel;
