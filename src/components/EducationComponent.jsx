import { useState } from "react";
import axios from "axios";
import { baseUrlAdmin} from "../lib/constants";

const EducationComponent = ({ education, fetchEducation, deleteEducation }) => {
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    field: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const [error, setError] = useState("");
  const baseUrl = baseUrlAdmin;

  // Add new education
  const addEducation = async () => {
    try {
      await axios.post(baseUrl + "education", newEducation);
      fetchEducation(); // Refresh list
      setNewEducation({
        school: "",
        degree: "",
        field: "",
        start_date: "",
        end_date: "",
        description: "",
      });
      setError(""); // Reset error
    } catch (err) {
      setError("Eğitim eklerken bir hata oluştu.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yeni Eğitim Ekle</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Okul"
          value={newEducation.school}
          onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Derece"
          value={newEducation.degree}
          onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Alan"
          value={newEducation.field}
          onChange={(e) => setNewEducation({ ...newEducation, field: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="date"
          value={newEducation.start_date}
          onChange={(e) => setNewEducation({ ...newEducation, start_date: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="date"
          value={newEducation.end_date}
          onChange={(e) => setNewEducation({ ...newEducation, end_date: e.target.value })}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <textarea
        placeholder="Açıklama"
        value={newEducation.description}
        onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        onClick={addEducation}
        className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Eğitimi Ekle
      </button>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Eğitimler</h2>
      <ul className="mt-4 space-y-4">
        {education.map((edu) => (
          <li
            key={edu.id}
            className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            <div className="text-2xl font-semibold text-gray-800">{edu.school}</div>
            <div className="text-lg text-gray-700">{edu.degree}</div>
            <div className="text-sm text-gray-600">{edu.field}</div>
            <div className="text-sm text-gray-500 mt-2">{edu.start_date} - {edu.end_date}</div>
            <p className="text-sm text-gray-700 mt-2">{edu.description}</p>
            <button
              onClick={() => deleteEducation(edu.id)}
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

export default EducationComponent;
