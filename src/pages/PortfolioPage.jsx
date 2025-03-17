import { useState, useEffect } from "react";
import useAdminStore from "../store/useAdminStore";

const Home = () => {
  const [tab, setTab] = useState("projects"); // Başlangıçta "projects" sekmesi seçili
  const { projects, education, experiences, fetchProjects, fetchEducation, fetchExperiences } = useAdminStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProjects();
      await fetchEducation();
      await fetchExperiences();
    };

    fetchData().then(() => {
      setLoading(false); // Veri geldikten sonra loading durumunu false yap
    });
  }, [fetchProjects, fetchEducation, fetchExperiences]);

  if (loading) {
    return <p className="text-xl text-gray-700 text-center mt-10">Yükleniyor...</p>; // Yükleniyor mesajı
  }

  // Veri gelmediği durumlar için boş dizi ekliyoruz
  const safeProjects = projects || [];
  const safeEducation = education || [];
  const safeExperience = experiences || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-12">
          <img
            src="/ass.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mert Gülle</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ textAlign: "justify" }}>
            Yazılım Mühendisliği son sınıf öğrencisiyim ve yapay zeka ile sağlık alanında projeler geliştirmekten büyük keyif alıyorum. Teknofest kapsamında Ulaşımda Yapay Zeka, Sağlıkta Yapay Zeka, Tarım Teknolojileri ve Savaşan İHA yarışmaları gibi birçok yarışmaya katıldım ve çoğunda finale kalma başarısı gösterdim. Son senemin ilk dönemini Erasmus programı ile Polonya'da geçirerek eğitim aldım.

            Full-stack uygulamalar geliştirsem de asıl uzmanlık alanım backend geliştirme ve yapay zeka. Bunun yanı sıra, "Yazılım ve İnovasyon Topluluğu"nun başkanlığını yapıyorum. Bu toplulukta teknik eğitimler düzenleyerek yazılım alanında gelişmek isteyenlere destek oluyoruz. Ancak etkinliklerimiz sadece eğitimle sınırlı kalmıyor; aynı zamanda eğlenceli geziler düzenleyerek sosyal bir ortam da oluşturuyoruz.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setTab("projects")}
            className={`px-6 py-3 mx-4 text-lg font-semibold rounded-lg transition-all duration-300 ${tab === "projects" ? "bg-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-800 hover:bg-indigo-100"}`}
          >
            Projeler
          </button>
          <button
            onClick={() => setTab("education")}
            className={`px-6 py-3 mx-4 text-lg font-semibold rounded-lg transition-all duration-300 ${tab === "education" ? "bg-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-800 hover:bg-indigo-100"}`}
          >
            Eğitim
          </button>
          <button
            onClick={() => setTab("experience")}
            className={`px-6 py-3 mx-4 text-lg font-semibold rounded-lg transition-all duration-300 ${tab === "experience" ? "bg-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-800 hover:bg-indigo-100"}`}
          >
            Deneyimler
          </button>
        </div>

        {/* Projeler Tabı */}
        {tab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeProjects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.projectUrl && (
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                    Projeye Git
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Eğitim Tabı */}
        {tab === "education" && (
          <div className="space-y-6">
            {safeEducation.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.school}</h3>
                <p className="text-gray-600 text-lg mb-2">{edu.degree}</p>
                <p className="text-gray-500">{edu.description}</p>
                <p className="text-gray-500">Başlangıç Tarihi: {edu.start_date}</p>
                <p className="text-gray-500">Bitiş Tarihi: {edu.end_date}</p>
              </div>
            ))}
          </div>
        )}

        {/* Deneyimler Tabı */}
        {tab === "experience" && (
          <div className="space-y-6">
            {safeExperience.length === 0 ? (
              <p className="text-xl text-center text-gray-600">No experiences available</p> // Eğer veri yoksa mesaj göster
            ) : (
              safeExperience.map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title} - {exp.company}</h3>
                  <p className="text-gray-600 mb-2">{exp.description}</p>
                  <p className="text-gray-500">Başlangıç Tarihi: {exp.start_date}</p>
                  <p className="text-gray-500">Bitiş Tarihi: {exp.end_date}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
