import React from 'react'
import bulb from '../assets/light-bulb.webp'
import dollar from '../assets/dollar.webp'
import ai from '../assets/artificial-intelligence.webp'

const Cards = () => {
  const arr = [
    {
      title: "Effortless Creativity",
      description: "Unleash your creativity with just a few words. No artistic skills required!",
      image: bulb
    },
    {
      title: "AI-Powered Magic",
      description: "Powered by cutting-edge AI, Kalakaari generates stunning visuals tailored to your vision.",
      image: ai
    },
    {
      title: "Affordable Pricing",
      description: "Choose from flexible pricing plans designed for everyone—from hobbyists to professionals.",
      image: dollar
    }
  ]

  return (
    <>
      <div className="flex flex-col md:flex-row w-full justify-around items-center p-4 gap-6">
        {arr.map((curElem, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 gap-4 rounded-xl shadow-inner shadow-blue-800 
                         w-full sm:w-[80%] md:w-[30%]  bg-transparent"
            >
              <img className="w-16 sm:w-20" src={curElem.image} alt={curElem.title} />
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                {curElem.title}
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg">
                {curElem.description}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cards
