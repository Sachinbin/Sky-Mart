import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import ProdSideBar from "../components/ProdSideBar";
import { useNavigate } from "react-router";

const About = () => {
  let { isSidbar } = useContext(Auth);
  let navigate = useNavigate()

  return (
    <div>
      <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12 flex flex-col items-center">

        {/* ICON */}
        <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-black mb-5">
          ⚡
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-center">
          About <span className="text-lime-400">SkyMart</span>
        </h1>

        <p className="text-gray-400 text-sm text-center max-w-2xl mb-10 leading-relaxed">
          SkyMart is a next-generation e-commerce platform built to make online shopping fast, secure, and enjoyable — for everyone.
        </p>

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl">
          {["20K+ Products", "50K+ Users", "4.9 Rating", "99% Delivery"].map((item, i) => (
            <div key={i} className="border border-gray-700 px-8 py-4 rounded-xl text-center">
              <p className="text-lime-400 font-semibold text-lg">{item.split(" ")[0]}</p>
              <p className="text-gray-400 text-xs">{item.split(" ").slice(1).join(" ")}</p>
            </div>
          ))}
        </div>

        {/* STORY BOX */}
        <div className="border border-gray-700 rounded-xl p-8 max-w-3xl mb-12">
          <h3 className="mb-3 font-semibold text-lg">Our Story</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            SkyMart started as a small idea — to bring seamless digital shopping experiences to users worldwide. 
            Over time, it evolved into a powerful platform connecting buyers and sellers efficiently.
          </p>
        </div>

        {/* WHAT WE STAND FOR */}
        <div className="mb-12 text-center w-full max-w-3xl">
          <h3 className="mb-6 font-semibold text-lg">What We Stand For</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {["Trust", "Speed", "Community", "Quality"].map((item, i) => (
              <div key={i} className="border border-gray-700 rounded-xl p-5">
                <p className="text-lime-400 font-semibold">{item}</p>
                <p className="text-gray-400 text-xs mt-1">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div className="mb-12 text-center">
          <h3 className="mb-6 font-semibold text-lg">Meet the Team</h3>

          <div className="flex flex-wrap justify-center gap-6">
            {["A", "P", "R", "S"].map((letter, i) => (
              <div key={i} className="border border-gray-700 rounded-xl px-6 py-5 text-center w-28">
                <div className="w-10 h-10 bg-lime-400 text-black rounded-full flex items-center justify-center mx-auto mb-3">
                  {letter}
                </div>
                <p className="text-sm">Member {i + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-lime-400/30 rounded-xl p-8 text-center max-w-md">
          <p className="mb-4 text-lg">Ready to shop?</p>
          <button onClick={()=>navigate("/dashboard/shop")} className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
            Browse Products →
          </button>
        </div>

      </div>

      {/* SIDEBAR */}
      {isSidbar ? <ProdSideBar /> : ""}
    </div>
  );
};

export default About;
