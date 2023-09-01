import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/eu1.jpg";

const Main = () => {
  return (
    <div className=" main text-gray-600 body-font mt-28">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="profile lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="hero rounded-full relative max-w-sm transition-all duration-700 filter grayscale hover:grayscale-0"
            alt="hero"
            src={profile}
            width={350}
            height={200}
            loading="lazy"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center ml-0 text-justify">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900 uppercase">
            Creating Ideas with
            <br /> Code, Design and Security
          </h1>
          <p className="mb-8 leading-relaxed mt-4 text-justify">
            Hello World ! Im Eduardo, since 1994 i have been walking an
            incredible path in the computing world, exploring areas as diverse
            as Linux, Python, Cybersecurity and Web Development. His journey is
            a true testament to dedication and constant learning. I create ideas
            in code format. If you is looking for a versatile talent passionate
            about the world of technology, you are certainly the right person to
            contact.
          </p>
          <div className="flex justify-center mt-4">
            <Link href="mailto:fontana.df@gmail.com">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Pay me a coffee ! ☕
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
