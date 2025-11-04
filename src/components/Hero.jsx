import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { FaDownload } from "react-icons/fa";
import video from "../assets/sec1img1.mp4";


const Hero = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const apiKey = import.meta.env.VITE_HF_API_KEY;
  const hf = new HfInference(apiKey);


  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!value.trim()) return;
    
    setLoading(true);
    setError("");


    try {
      const blob = await hf.textToImage({
        inputs: value,
        model: "black-forest-labs/FLUX.1-schnell",
      });

      console.log("Blob received:", blob);
      console.log("Blob size:", blob.size);
      console.log("Blob type:", blob.type);

      if (blob.size === 0) {
        setError("Generated image is empty. Please try again.");
        setLoading(false);
        return;
      }

      const imageUrl = URL.createObjectURL(blob);
      console.log("Image URL created:", imageUrl);
      
      setImages((prev) => [...prev, { url: imageUrl, blob }]);
      setValue("");
      
    } catch (error) {
      console.error("Error generating image:", error);
      setError(error.message || "Failed to generate image. Please try again.");
      alert("Error: " + (error.message || "Failed to generate image"));
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
                disabled={loading}
                className="w-full sm:w-auto text-white text-lg rounded-xl px-4 py-2 bg-[#A76EF4] hover:bg-[#925ee0] transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-500 text-white p-3 rounded-lg">
              {error}
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
                    onError={(e) => {
                      console.error("Image failed to load:", e);
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23333' width='400' height='400'/%3E%3Ctext fill='%23fff' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage Failed to Load%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <button
                    onClick={() => downloadImage(image.blob, index)}
                    className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#A76EF4] text-white px-4 py-2 rounded-lg hover:bg-[#925ee0] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
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
