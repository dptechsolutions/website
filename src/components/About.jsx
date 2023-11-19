import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am currently pursuing my BE in Computer Engineering from Thapar Institute of Engineering and Technology,Patiala, where I was also the General Secretary of the Linux User Group. I am passionate and motivated about learning new technologies and developing innovative solutions. I am confident that I can use my skills and experience to contribute to your team and goals.
        </p>

        <br />

      </div>
    </div>
  );
};

export default About;
