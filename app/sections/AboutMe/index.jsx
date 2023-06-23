import React from "react";

const AboutMe = () => {
  return (
    <div className="flex gap-5 justify-center lg:pb-40 " id="about">
      <div className="flex-1 mt-16 sm:mt-24 lg:mt-0">
        <img
          className="w-48 h-48 rounded-full mx-auto lg:w-96 lg:h-96"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 space-y-7 text-white">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">
            About <span className="text-bright">Me</span>
          </h3>
          <h3 className="text-xl font-semibold">Frontend Developer!</h3>
        </div>

        <div className="space-y-3">
          <p className="w-[80%]">
            My name is Mohammed, I recently graduated with a B.Sc in Computer
            Engineering. I have very good knowledge in web development, and I
            have trained well to improve my web development capabilities.
          </p>
          <p className="w-[80%]">
            I have very good knowledge of some programming languages, including:
            Java - JavaScript - Python - ... etc.
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/1nIodH9DcRtiJt7b2of0pyakbTaHM2ti-/view?usp=sharing"
          target="_blank"
          className="w-fit rounded-full bg-bright px-4 py-2.5 text-base font-medium text-black-dark hover:shadow-[0px_2px_10px_1px_rgba(9,234,242)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
