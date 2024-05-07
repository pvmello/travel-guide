import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, My name is Paulo, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
            My journey extends into collaborative design with Figma, where I translate concepts into interactive prototypes. React has been instrumental in my development as well, enabling the creation of dynamic and scalable user interfaces through its component-based architecture. Additionally, I've embraced the efficiency of Tailwind CSS, While both frameworks have presented their challenges, the effort invested is definitely really rewarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
