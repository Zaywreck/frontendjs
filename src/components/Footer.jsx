import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Zaywreck" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/mertgulle/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-gray-400 transition" />
          </a>
          <a href="https://www.instagram.com/mert.gl58" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-gray-400 transition" />
          </a>
        </div>

        <div className="flex justify-center space-x-6 text-sm">
          <a href="mailto:mgulle35@gmail.com" className="flex items-center space-x-2 hover:text-gray-400 transition">
            <Mail className="w-5 h-5" />
            <span>mgulle35@gmail.com</span>
          </a>
          <a href="tel:+905522690531" className="flex items-center space-x-2 hover:text-gray-400 transition">
            <Phone className="w-5 h-5" />
            <span>+90 552 269 05 31</span>
          </a>
        </div>

        <p className="mt-4 text-sm">&copy; 2025 Mert Gülle - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
