import { create } from "zustand";
import axios from "axios";
import { baseUrlAdmin } from "../lib/constants"

const baseUrl = baseUrlAdmin;

const useAdminStore = create((set) => ({
  experiences: [],
  education: [],
  projects: [],
  
  // Fetch Experiences
  fetchExperiences: async () => {
    try {
      const response = await axios.get(baseUrl + "experience");  // Endpointi düzelttim
      set({ experiences: response.data });
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  },

  // Fetch Education
  fetchEducation: async () => {
    try {
      const response = await axios.get(baseUrl + "education");
      set({ education: response.data });
    } catch (error) {
      console.error("Error fetching education:", error);
    }
  },

  // Fetch Projects
  fetchProjects: async () => {
    try {
      const response = await axios.get(baseUrl + "projects");
      set({ projects: response.data });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },

  // Add Experience
  addExperience: async (experience) => {
    try {
      const response = await axios.post(baseUrl + "experience", experience);  // Endpointi düzelttim
      set((state) => ({
        experiences: [...state.experiences, response.data],  // Eklenen veriyi state'e ekledim
      }));
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  },

  // Add Education
  addEducation: async (education) => {
    try {
      const response = await axios.post(baseUrl + "education", education);  // Endpointi düzelttim
      set((state) => ({
        education: [...state.education, response.data],  // Eklenen veriyi state'e ekledim
      }));
    } catch (error) {
      console.error("Error adding education:", error);
    }
  },

  // Add Project
  addProject: async (project) => {
    try {
      const response = await axios.post(baseUrl + "projects", project);  // Endpointi düzelttim
      set((state) => ({
        projects: [...state.projects, response.data],  // Eklenen veriyi state'e ekledim
      }));
    } catch (error) {
      console.error("Error adding project:", error);
    }
  },

  // Delete Experience
  deleteExperience: async (id) => {
    try {
      await axios.delete(baseUrl + `experience/${id}`);
      set((state) => ({
        experiences: state.experiences.filter((exp) => exp.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  },

  // Delete Education
  deleteEducation: async (id) => {
    try {
      await axios.delete(baseUrl + `education/${id}`);
      set((state) => ({
        education: state.education.filter((edu) => edu.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  },

  // Delete Project
  deleteProject: async (id) => {
    try {
      await axios.delete(baseUrl + `projects/${id}`);
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  },
}));

export default useAdminStore;
