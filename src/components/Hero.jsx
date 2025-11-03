import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import video from "../assets/sec1img1.mp4";

const Hero = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_HF_API_KEY;
  const hf = new HfInference(apiKey);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!value.trim()) return;
    
    setLoading(true);

    try {
      const blob = await hf.textToImage({
        inputs: value,
        model: "black-forest-labs/FLUX.1-schnell",
      });

      const imageUrl = URL.createObjectURL(blob);
      setImages((prev) => [...prev, imageUrl]);
      setValue("");
      
    } catch (error) {
      console.error("Error generating image:", error.message);
      alert("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
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

          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {images.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Generated ${index + 1}`}
                    className="w-full h-auto"
                  />
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
