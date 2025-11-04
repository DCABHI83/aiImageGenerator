import React from 'react'

const About = () => {
  return (
    <div className='bg-[#0a0118] min-h-screen py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        
        {/* About Kalakaari Section */}
        <div className='mb-16'>
          <h2 className='text-[#B053FF] text-4xl md:text-5xl font-bold mb-8'>About Kalakaari</h2>
          <div className='text-white space-y-6'>
            <p className='text-xl md:text-2xl'>
              Welcome to Kalakaari, where your imagination takes shape!
            </p>
            <p className='text-lg md:text-xl leading-relaxed'>
              At Kalakaari, we believe that creativity has no limits. Our platform empowers you to transform your thoughts and ideas into captivating visuals with just a few words. Whether you're an artist, dreamer, or someone looking to explore the boundaries of creativity, Kalakaari makes it easy to turn your imagination into reality.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className='mb-16'>
          <h2 className='text-[#B053FF] text-3xl md:text-4xl font-bold mb-6'>What We Do</h2>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            Kalakaari is a cutting-edge text-to-image generator that brings your ideas to life. All you need to do is type a prompt that describes your vision, and our AI will create stunning, one-of-a-kind images tailored to your description.
          </p>
        </div>

        {/* Why Choose Kalakaari Section */}
        <div className='mb-16'>
          <h2 className='text-[#B053FF] text-3xl md:text-4xl font-bold mb-6'>Why Choose Kalakaari?</h2>
          <ul className='text-white space-y-4 text-lg md:text-xl'>
            <li className='leading-relaxed'>
              <span className='font-semibold'>Express Your Vision:</span> Let your thoughts flow, and see them come alive as beautiful images.
            </li>
            <li className='leading-relaxed'>
              <span className='font-semibold'>Effortless Creativity:</span> You don't need artistic skills—just your imagination and a few words.
            </li>
            <li className='leading-relaxed'>
              <span className='font-semibold'>AI at Its Best:</span> Powered by advanced technology, Kalakaari ensures every creation is unique and visually stunning.
            </li>
            <li className='leading-relaxed'>
              <span className='font-semibold'>Accessible for Everyone:</span> Whether you're an artist, designer, or simply curious, our platform is built to be intuitive and easy to use.
            </li>
          </ul>
        </div>

        {/* The Meaning Behind Kalakaari Section */}
        <div className='mb-16'>
          <h2 className='text-[#B053FF] text-3xl md:text-4xl font-bold mb-6'>The Meaning Behind Kalakaari</h2>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            Inspired by the Hindi word 'Kalakaari', which translates to 'artistry', our platform celebrates the essence of creativity. We aim to give everyone the tools to be an artist, no matter their skill level or background.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className='mb-16'>
          <h2 className='text-[#B053FF] text-3xl md:text-4xl font-bold mb-6'>Our Vision</h2>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            Our mission is to make art creation accessible to everyone, allowing ideas to transcend the barriers of tools and techniques. At Kalakaari, creativity meets technology, opening a new world of possibilities for everyone.
          </p>
        </div>

        {/* How It Works Section */}
        <div className='mb-16'>
          <h2 className='text-[#B053FF] text-3xl md:text-4xl font-bold mb-6'>How It Works</h2>
          <ol className='text-white space-y-4 text-lg md:text-xl list-decimal list-inside'>
            <li className='leading-relaxed'>
              <span className='font-semibold'>Type Your Thought:</span> Enter a prompt that captures your idea.
            </li>
            <li className='leading-relaxed'>
              <span className='font-semibold'>Generate Magic:</span> Our AI will turn your words into stunning visuals in seconds.
            </li>
            <li className='leading-relaxed'>
              <span className='font-semibold'>Use & Share:</span> Download your creation and share it with the world.
            </li>
          </ol>
        </div>
        <div>
          <h2 className='text-[#B053FF] text-3xl md:text-4xl font-bold mb-6'>Join the Kalakaari Journey</h2>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            At Kalakaari, we're redefining how art is made. Join us to experience the magic of combining human imagination with the power of AI. Your next masterpiece is just a prompt away!
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
