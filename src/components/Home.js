import React from "react";
import Header from "./Header";

function Home() {
  return (
    <section
      id="home"
      className="snap-start w-screen h-screen bg-no-repeat bg-right-bottom bg-programming-svg bg-contain md:bg-auto bg-fixed"
    >
      <header>
        <Header />
      </header>
      <div className="container mx-auto text-4xl flex flex-col h-full justify-center items-start text-gray-500 text-left">
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
