import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import ProdSideBar from "../components/ProdSideBar";

const About = () => {
  let {isSidbar}=useContext(Auth)
  return (
   <div>
     <div className="bg-black text-white min-h-screen px-6 py-10 flex flex-col items-center">

      {/* ICON */}
      <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-black mb-4">
        ⚡
      </div>

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">
        About <span className="text-lime-400">SkyMart</span>
      </h1>

      <p className="text-gray-400 text-sm text-center max-w-xl mb-8">
        SkyMart is a next-generation e-commerce platform built to make online shopping fast, secure, and enjoyable — for everyone.
      </p>

      {/* STATS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["20K+ Products", "50K+ Users", "4.9 Rating", "99% Delivery"].map((item, i) => (
          <div key={i} className="border border-gray-700 px-6 py-3 rounded-xl text-center">
            <p className="text-lime-400 font-semibold">{item.split(" ")[0]}</p>
            <p className="text-gray-400 text-xs">{item.split(" ").slice(1).join(" ")}</p>
          </div>
        ))}
      </div>

      {/* STORY BOX */}
      <div className="border border-gray-700 rounded-xl p-6 max-w-2xl mb-10">
        <h3 className="mb-2 font-semibold">Our Story</h3>
        <p className="text-gray-400 text-sm">
          SkyMart started as a small idea — to bring seamless digital shopping experiences to users worldwide. 
          Over time, it evolved into a powerful platform connecting buyers and sellers efficiently.
        </p>
      </div>

      {/* WHAT WE STAND FOR */}
      <div className="mb-10 text-center">
        <h3 className="mb-6 font-semibold">What We Stand For</h3>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
          {[
            "Trust",
            "Speed",
            "Community",
            "Quality"
          ].map((item, i) => (
            <div key={i} className="border border-gray-700 rounded-xl p-4">
              <p className="text-lime-400 font-semibold">{item}</p>
              <p className="text-gray-400 text-xs">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="mb-10 text-center">
        <h3 className="mb-6 font-semibold">Meet the Team</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {["A", "P", "R", "S"].map((letter, i) => (
            <div key={i} className="border border-gray-700 rounded-xl px-6 py-4 text-center">
              <div className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mx-auto mb-2">
                {letter}
              </div>
              <p className="text-sm">Member {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-lime-400/30 rounded-xl p-6 text-center max-w-md">
        <p className="mb-4">Ready to shop?</p>
        <button className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
          Browse Products →
        </button>
      </div>

    </div>

      // sidebar-------------------------------------------------------------
            {
                isSidbar ? <ProdSideBar/> : ""
            }
   </div>
  );
};

export default About;
