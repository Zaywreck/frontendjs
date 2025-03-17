import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrlAdmin } from "../lib/constants";

const ExperienceComponent = ({ experiences, fetchExperiences, deleteExperience }) => {
  const [newItem, setNewItem] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExperiences(); // Fetch the experiences when the component mounts or updates
  }, [fetchExperiences]);

  // Add new experience
  const addExperience = async () => {
    try {
      await axios.post(baseUrlAdmin + "experience", newItem);
      fetchExperiences(); // Refresh list
      setNewItem({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      });
      setError(""); // Reset error
    } catch (err) {
      setError("Deneyim eklerken bir hata oluştu.");
      console.log(err);
    }
  };

  // Safe experiences mapping
  const safeExperiences = experiences || [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yeni Deneyim Ekle</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Başlık"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Şirket"
          value={newItem.company}
          onChange={(e) => setNewItem({ ...newItem, company: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          value={newItem.startDate}
          onChange={(e) => setNewItem({ ...newItem, startDate: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          value={newItem.endDate}
          onChange={(e) => setNewItem({ ...newItem, endDate: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <textarea
        placeholder="Açıklama"
        value={newItem.description}
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        onClick={addExperience}
        className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Deneyimi Ekle
      </button>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Deneyimler</h2>
      <ul className="mt-4 space-y-4">
        {safeExperiences.map((exp) => (
          <li
            key={exp.id}
            className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            <div className="text-2xl font-semibold text-gray-800">{exp.title}</div>
            <div className="text-lg text-gray-600">{exp.company}</div>
            <div className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</div>
            <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
            <button
              onClick={() => deleteExperience(exp.id)}
              className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>

      {error && <div className="text-red-600 font-semibold text-center mt-6">{error}</div>}
    </div>
  );
};

export default ExperienceComponent;
