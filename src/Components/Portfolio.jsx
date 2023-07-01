import React from "react";

const Portfolio = () => {
  // TODO :  Add project image

  const protfolios = [
    {
      id: 1,
      src: "Todo you Project image",
    },
    {
      id: 2,
      src: "Todo you Project image",
    },
    {
      id: 3,
      src: "Todo you Project image",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {protfolios.map(({id, src}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src=""
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center  ">
              <button className="w-1/2 px-6 py-3 md-4 duration-300 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 md-4 duration-300 hover:scale-105">
                Code Here{" "}
              </button>
            </div>
          </div>
        ))}
       </div>
      </div>
    </div>
  );
};

export default Portfolio;
