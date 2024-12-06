import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-pink-300 to-pink-100 w-full h-screen flex flex-col justify-between">
      {/* Main Section with Full Image */}
      <main className="flex-1 relative">
        {/* Image covering full screen */}
        <div className="w-full h-full">
          <img
            src="background.jpg" // Replace with your traffic light image path
            alt="Traffic light"
            className="w-full h-full object-cover"
          />
        </div>

        {/* MOX Logo Overlay */}
        <div className="absolute top-8 left-0">
          <img
            src="MOX.png" // Path to your MOX logo image
            alt="MOX Logo"
            className="w-44 h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white px-6 py-8 rounded-t-3xl shadow-lg">
        <h2 className="text-gray-900 text-xl font-semibold mb-4">
          Get started with MOX
        </h2>
        <Link to="/login" className="bg-black text-white w-full py-4 rounded-lg text-lg font-medium flex items-center justify-center hover:bg-gray-800 transition">
          Continue <span className="ml-2 text-xl">→</span>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
