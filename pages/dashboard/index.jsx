"use client";
import tuneTunnelDashboard from "../../public/tuneTunnelDashboard.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FadeInComponent() {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-indigo-950">
      <Image
        src={tuneTunnelDashboard} // Replace with the path to your image
        alt="Background"
        width="1000"
        height="1000"
        onLoad={handleImageLoad}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
          imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-lg text-white mb-8">We're glad you're here.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
