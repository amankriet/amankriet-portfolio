import React from "react";
// import programmingSvg from './assets/svg/programming.svg'

function Home() {
  return (
    <section
      id="home"
      className="box-border snap-end w-screen h-[calc(100vh-80px)] md:mt-20 mt-14 grid content-center bg-no-repeat bg-right-bottom bg-programming-svg bg-contain md:bg-auto"
    >
      <div className="w-full pl-8 text-4xl flex-col justify-center text-gray-500 text-left">
        <div className="w-fit h-fit text-center">
          <h2 className="text-7xl font-semibold">Aman Kumar</h2>
          <p className="text-xl">Front-End Engineer (SDE-1)</p>
          <p className="text-xl max-w-md text-blue-300">
            Interested in Backend Developer Roles (MySQL, MongoDB, Node.js,
            AWSS3, Firebase DB)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
