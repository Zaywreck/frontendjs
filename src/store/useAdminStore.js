import { create } from "zustand";
import axios from "axios";
import { baseUrlAdmin } from "../lib/constants"

const baseUrl = baseUrlAdmin;

const useAdminStore = create((set) => ({
  experiences: [],
  education: [],
  projects: [],
  loading: false, // loading durumu

  // Fetch Experiences
  fetchExperiences: async () => {
    set({ loading: true }); // loading true
    try {
      const response = await axios.get(baseUrl + "experience");
      set({ experiences: response.data });
    } catch (error) {
      console.error("Error fetching experiences:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Fetch Education
  fetchEducation: async () => {
    set({ loading: true }); // loading true
    try {
      const response = await axios.get(baseUrl + "education");
      set({ education: response.data });
    } catch (error) {
      console.error("Error fetching education:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Fetch Projects
  fetchProjects: async () => {
    set({ loading: true }); // loading true
    try {
      const response = await axios.get(baseUrl + "projects");
      set({ projects: response.data });
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Add Experience
  addExperience: async (experience) => {
    set({ loading: true }); // loading true
    try {
      const response = await axios.post(baseUrl + "experience", experience);
      set((state) => ({
        experiences: [...state.experiences, response.data], // Yeni veriyi ekle
      }));
    } catch (error) {
      console.error("Error adding experience:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Add Education
  addEducation: async (education) => {
    set({ loading: true }); // loading true
    try {
      const response = await axios.post(baseUrl + "education", education);
      set((state) => ({
        education: [...state.education, response.data], // Yeni veriyi ekle
      }));
    } catch (error) {
      console.error("Error adding education:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Add Project
  addProject: async (project) => {
    set({ loading: true }); // loading true
    try {
      const response = await axios.post(baseUrl + "projects", project);
      set((state) => ({
        projects: [...state.projects, response.data], // Yeni veriyi ekle
      }));
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Delete Experience
  deleteExperience: async (id) => {
    set({ loading: true }); // loading true
    try {
      await axios.delete(baseUrl + `experience/${id}`);
      set((state) => ({
        experiences: state.experiences.filter((exp) => exp.id !== id), // Silinen veriyi state'den çıkar
      }));
    } catch (error) {
      console.error("Error deleting experience:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Delete Education
  deleteEducation: async (id) => {
    set({ loading: true }); // loading true
    try {
      await axios.delete(baseUrl + `education/${id}`);
      set((state) => ({
        education: state.education.filter((edu) => edu.id !== id), // Silinen veriyi state'den çıkar
      }));
    } catch (error) {
      console.error("Error deleting education:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },

  // Delete Project
  deleteProject: async (id) => {
    set({ loading: true }); // loading true
    try {
      await axios.delete(baseUrl + `projects/${id}`);
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id), // Silinen veriyi state'den çıkar
      }));
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      set({ loading: false }); // loading false
    }
  },
}));

export default useAdminStore;
