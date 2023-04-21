import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <div className="container mx-auto px-6 py-8">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
