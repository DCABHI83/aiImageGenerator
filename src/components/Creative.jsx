import React from 'react'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'

const Creative = () => {
  const arr = [
    {
      "title": "Unleash Your Creativity",
      "description": "At Kalakaari, we believe in the power of imagination. Our platform transforms your thoughts into stunning visuals, allowing you to explore the endless possibilities of creative expression. Whether it's futuristic designs or classic themes, we provide a canvas where your ideas come to life.",
      "image": img1,
      "section": "right"
    },
    {
      "title": "Where Art Meets Innovation",
      "description": "From ancient inspirations to modern art, Kalakaari blends tradition with cutting-edge technology. Our platform empowers you to create visual masterpieces that reflect your unique perspective. Dive into a world where innovation and creativity come together to shape extraordinary images.",
      "image": img2,
      "section": "left"
    }
  ]

  return (
    <>
      <div className="flex flex-col gap-16 p-6 md:mt-10">
        {arr.map((curElem, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              curElem.section === "left" ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            
            <div className="md:w-1/2 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {curElem.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                {curElem.description}
              </p>
            </div>

          
            <div className="md:w-[50%]">
              <img
                src={curElem.image}
                alt={curElem.title}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Creative
