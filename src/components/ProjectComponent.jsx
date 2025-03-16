import { useState } from "react";
import axios from "axios";
import { baseUrlAdmin } from "../lib/constants";

const ProjectComponent = ({ projects, fetchProjects, deleteProject }) => {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image_url: "",
    project_url: "",
  });
  const [error, setError] = useState("");
  const baseUrl = baseUrlAdmin;

  // Add new project
  const addProject = async () => {
    try {
      await axios.post(baseUrl + "projects", newProject);
      fetchProjects(); // Refresh list
      setNewProject({
        title: "",
        description: "",
        image_url: "",
        project_url: "",
      });
      setError(""); // Reset error
    } catch (err) {
      setError("Proje eklerken bir hata oluştu.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yeni Proje Ekle</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Başlık"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Açıklama"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Resim URL"
          value={newProject.image_url}
          onChange={(e) => setNewProject({ ...newProject, image_url: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Proje URL"
          value={newProject.project_url}
          onChange={(e) => setNewProject({ ...newProject, project_url: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      <button
        onClick={addProject}
        className="w-full mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Projeyi Ekle
      </button>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Projeler</h2>
      <ul className="mt-4 space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            <div className="text-2xl font-semibold text-gray-800">{project.title}</div>
            <p className="text-lg text-gray-700 mt-2">{project.description}</p>
            <div className="flex items-center mt-4 space-x-4">
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                Projeyi Görüntüle
              </a>
              <button
                onClick={() => deleteProject(project.id)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      {error && <div className="text-red-600 font-semibold text-center mt-6">{error}</div>}
    </div>
  );
};

export default ProjectComponent;
