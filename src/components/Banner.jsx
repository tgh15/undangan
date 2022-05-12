import React from "react";

function Banner(props) {
  return (
    <section
      className={` transition-all duration-500 ease-in h-screen w-full  banner text-black flex items-center justify-center flex-col`}
    >
      <h1 className="nama drop-shadow-xl text-8xl text-white">Erwin & Raisa</h1>
      <h1 className="text drop-shadow-xl text-white text-2xl">
        Rabu, 18 Mei 2022
      </h1>
      <a
        onClick={() => props.btnClick()}
        href="#isi"
        className="p-3 mt-5 bg-green-400 rounded-md text-white font-bold"
      >
        Buka Undangan
      </a>
    </section>
  );
}

export default Banner;
