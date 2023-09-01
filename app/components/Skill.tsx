import React from "react";
import Image from "next/image";
import job from "../../public/011.jpg";

const Skill = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap mr-16 mt-0">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="skill title-font font-medium text-xl mb-2 text-gray-900">
              Some Information about tecnology
            </h1>
            <div className="leading-relaxed">
              <p className="texto text-justify mt-5">
                It is not enough to have a beautiful system, it has to be
                beautiful, usual and safe. I create stylized and safe solutions
                for your business.
              </p>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 ml-20">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              4,6 billion
            </h2>
            <p className="leading-relaxed">Data Leaking</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              95% percent
            </h2>
            <p className="leading-relaxed">Weak Password</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              87% percent
            </h2>
            <p className="leading-relaxed">Website Breach</p>
          </div>
        </div>
        <div className="contact lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0">
          <Image
            className="hero relative transition-all duration-700 filter grayscale hover:grayscale-0 ml-14 rounded-lg"
            src={job}
            alt="stats"
            width={500}
            height={400}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
