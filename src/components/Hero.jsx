import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { FaDownload } from "react-icons/fa";
import video from "../assets/sec1img1.mp4";


const Hero = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debug: Check if API key is available
  const apiKey = import.meta.env.VITE_HF_API_KEY;
  
  React.useEffect(() => {
    console.log("API Key available:", !!apiKey);
    if (!apiKey) {
      console.warn("VITE_HF_API_KEY is not set!");
    }
  }, [apiKey]);

  const hf = new HfInference(apiKey);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!value.trim()) {
      setError("Please enter a prompt");
      return;
    }

    if (!apiKey) {
      setError("API Key not configured. Please check environment variables.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      console.log("Generating image with prompt:", value);
      
      const blob = await hf.textToImage({
        inputs: value,
        model: "black-forest-labs/FLUX.1-schnell",
      });

      console.log("Blob received:", blob.size, "bytes");

      if (blob.size === 0) {
        setError("Generated image is empty. Please try again.");
        setLoading(false);
        return;
      }

      const imageUrl = URL.createObjectURL(blob);
      setImages((prev) => [...prev, { url: imageUrl, blob }]);
      setValue("");
      setError("");
      
    } catch (error) {
      console.error("Error details:", error);
      const errorMsg = error.message || "Failed to generate image";
      setError(errorMsg);
      alert("Error: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = (blob, index) => {
    try {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `kalakaari-${Date.now()}-${index}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image');
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center my-10 md:p-4 gap-8">
        <div className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Create beautiful <span className="text-[#A76EF4]">AI Art</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg">
            Discover the Boundless Potential and impact of AI in Every Sphere of
            Life.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
              <input
                type="text"
                placeholder="Describe what you want"
                className="border w-full sm:w-[60%] bg-white rounded-xl px-3 py-2 text-black focus:outline-none"
                name="prompt"
                value={value}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={loading || !apiKey}
                className="w-full sm:w-auto text-white text-lg rounded-xl px-4 py-2 bg-[#A76EF4] hover:bg-[#925ee0] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-500 text-white p-3 rounded-lg font-semibold">
              ⚠️ {error}
            </div>
          )}

          {!apiKey && (
            <div className="bg-yellow-600 text-white p-3 rounded-lg">
              ⚠️ API Key not set. Check Vercel environment variables.
            </div>
          )}

          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg relative">
                  <img
                    src={image.url}
                    alt={`Generated ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => downloadImage(image.blob, index)}
                    className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#A76EF4] text-white px-4 py-2 rounded-lg hover:bg-[#925ee0] transition-all duration-300 shadow-lg font-semibold"
                  >
                    <FaDownload size={16} /> Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 shadow-lg rounded-2xl shadow-blue-900">
          <video
            className="w-full rounded-2xl"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
