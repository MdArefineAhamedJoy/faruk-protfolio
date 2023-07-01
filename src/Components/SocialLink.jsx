import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelopeSquare,
  FaLink,
} from "react-icons/fa";

const SocialLink = () => {
  // Todo : your social Link add to href property
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https//linkedin.com ",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https//github.com ",
    },
    {
      id: 3,
      child: (
        <>
          Email <FaEnvelopeSquare size={30} />
        </>
      ),
      href: "https//linkedin.com ",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaLink size={30} />
        </>
      ),
      href: "Todo:  folder path name here ",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({id , child , style , href , download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md  duration-300 hover:ml-[-10px]" + " " + {style}}>
            <a
              className="flex justify-between items-center  w-full text-white"
              href={href} download={download} target="_blank"
            >
                {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
