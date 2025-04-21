"use client";
import { useState } from "react";
import Image from "next/image";
import OriginalImage from "./components/OriginalImage";
import EnhancedImage from "./components/EnhancedImage";

export default function Home() {
  const [imageURL, setImageURL] = useState(null);
  const [enhancedSrc, setEnhancedSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleDoMagic = () => {
    if (!imageURL) return;

    setLoading(true);
    setEnhancedSrc(null);

    const delay = Math.floor(Math.random() * 20000) + 10000;

    setTimeout(() => {
      setEnhancedSrc(imageURL);
      setLoading(false);
    }, delay);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  return (
    <div className="min-h-[96vh] w-full flex justify-center items-center flex-col gap-6 px-4 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
          AI Image Enhancer
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-600">
          Upload your image and let AI enhance it in seconds!
        </p>
      </div>

      {!imageURL && (
        <label htmlFor="InputFile" className="w-full max-w-xl">
          <div className="flex items-center justify-center h-32 bg-white shadow-md rounded-lg cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              name="InputFile"
              id="InputFile"
              onChange={handleImageChange}
            />
            <span className="border-2 border-dashed py-6 px-8 sm:px-16 rounded-md border-gray-400 text-center text-sm sm:text-base">
              Drag or Click to Upload image
            </span>
          </div>
        </label>
      )}

      {imageURL && (
        <div className="ImagePreview flex flex-col lg:flex-row gap-8 sm:gap-12 items-center justify-center flex-wrap">
          <OriginalImage src={imageURL} />

          <button
            onClick={handleDoMagic}
            disabled={enhancedSrc}
            type="button"
            className={`text-white h-fit bg-gradient-to-br from-rose-700 to-blue-950 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center mb-4 lg:mb-0 ${enhancedSrc ? "cursor-not-allowed" : "active:bg-gradient-to-bl"
              }`}
          >
            Do Magic
          </button>

          <EnhancedImage src={enhancedSrc} loading={loading} />
        </div>
      )}
    </div>
  );
}
