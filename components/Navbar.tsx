// components/Navbar.tsx
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const { token, setToken } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowLogout(!!token);
    setShowMenu(!!token);
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("jwt_token");
    router.push("/login");
  };

  return (
    <nav className="bg-indigo-500 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">NFT Metadata Manager</h1>
        <div className="text-white">
          <Link
            href="/"
            passHref
            className={`cursor-pointer mr-6 text-lg font-semibold hover:text-indigo-300 transition-colors ${
              showMenu ? "" : "hidden"
            }`}
          >
            NFT List
          </Link>

          {showLogout && (
            <button
              onClick={handleLogout}
              className="text-white bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
