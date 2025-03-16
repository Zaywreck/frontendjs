import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                {/* Başlık sola hizalanacak */}
                <h1 className="text-2xl font-bold">Mert Gülle</h1>

                {/* Tuşlar sağa hizalanacak */}
                <div className="flex space-x-4">
                    <Link
                        to="/Login"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Giriş Yap
                    </Link>
                    <Link
                        to="/"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Portfolyo
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
