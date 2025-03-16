import axios from "axios";
import { baseUrlAdmin } from "./constants";
API_URL = baseUrlAdmin;

export const api = axios.create({
  baseURL: API_URL,
});

export const getExperiences = () => api.get("/experience");
export const createExperience = (data) => api.post("/experience", data);
export const updateExperience = (id, data) => api.put(`/experience/${id}`, data);
export const deleteExperience = (id) => api.delete(`/experience/${id}`);

export const getEducation = () => api.get("/education");
export const createEducation = (data) => api.post("/education", data);
export const updateEducation = (id, data) => api.put(`/education/${id}`, data);
export const deleteEducation = (id) => api.delete(`/education/${id}`);

export const getProjects = () => api.get("/projects");
export const createProject = (data) => api.post("/projects", data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);
