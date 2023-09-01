import React from "react";
import Image from "next/image";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import twitter from "../../public/twitter.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-900 body-font bg-white z-10 fixed top-0 left-0 right-0 justify-center">
      <div className="container mx-auto p-5 flex items-center justify-center">
        <Link href="https://github.com/eduardofontana" target="_blank">
          <Image
            className="github mr-5"
            src={github}
            width={50}
            height={50}
            alt=""
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/edu-ardo-b9b20b284/"
          target="_blank"
        >
          <Image
            className="linkedin mr-5"
            src={linkedin}
            width={50}
            height={50}
            alt=""
          />
        </Link>
        <Link href="https://twitter.com/duhduhfontana" target="_blank">
          <Image
            className="twitter"
            src={twitter}
            width={50}
            height={50}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
