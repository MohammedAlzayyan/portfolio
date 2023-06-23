import { navigation } from "@/app/data";
import React from "react";

const Hero = () => {
  return (
    <div className="relative isolate" id="hero">
      {/* <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg> */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-32 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-col gap-5 text-white">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Hello, It s Me</h3>
            <h1 className="text-4xl font-bold">Mohammed Alzayyan</h1>
            <h3 className="text-2xl font-semibold">
              And I m a <span className="text-bright">Frontend Developer</span>
            </h3>
          </div>

          <span className="text-lg">
            I&apos;m Mohammed, a computer engineer and specializes in Front End
            Development using React Js 👨‍💻
          </span>

          <div className="flex gap-3">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-gray-400 hover:text-bright transition-all duration-300 ease-in-out"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <a
            href="#"
            className="w-fit rounded-full bg-bright px-4 py-2.5 text-base font-medium text-black-dark hover:shadow-[0px_2px_10px_1px_rgba(9,234,242)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <img
            className="w-48 h-48 rounded-full mx-auto lg:w-96 lg:h-96"
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
