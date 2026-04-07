import React, { useContext } from 'react';

import { Auth } from '../context/AuthContext';
import ProdSideBar from '../components/ProdSideBar';
import { useNavigate } from 'react-router';


const Home = () => {
  let { isLoggedIn,isSidbar } = useContext(Auth)
  let navigate = useNavigate()
  return (
    <div>
      <div className="bg-black text-white min-h-screen px-6 md:px-12 py-6">

        {/* HERO SECTION */}
        <div className="border border-gray-800 rounded-2xl p-8 md:p-12 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.08),_black)]">

          <p className="text-lime-400 text-sm mb-3">GOOD AFTERNOON 👋</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome back, <br />
            <span className="text-lime-400">{isLoggedIn.name}!</span>
          </h1>

          <p className="text-gray-400 max-w-xl mb-8">
            Discover today's picks — hand-curated products across electronics,
            fashion, and more.
          </p>

          <div className="flex gap-4">
            <button onClick={()=>navigate("/dashboard/shop")} className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-300 transition">
              Shop Now →
            </button>

            <button onClick={()=>navigate("/dashboard/shop")} className="border border-gray-700 px-6 py-3 rounded-xl hover:border-lime-400 transition">
              View All Products
            </button>
          </div>

          {/* RIGHT FLOAT CARDS */}
          <div className="hidden md:flex flex-col gap-4 absolute right-20 top-32">
            <div className="bg-lime-400/10 border border-lime-400/30 px-6 py-4 rounded-xl text-center">
              <p className="text-lime-400 text-xl font-bold">20+</p>
              <p className="text-gray-400 text-sm">Products Available</p>
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-xl text-center">
              <p className="text-white text-xl font-bold">Free</p>
              <p className="text-gray-400 text-sm">Delivery on ₹999+</p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          {[
            { title: "Cart Items", value: "0", sub: "In your bag" },
            { title: "Cart Value", value: "$0.00", sub: "Ready to checkout" },
            { title: "Top Products", value: "5", sub: "Highly rated" },
            { title: "Categories", value: "6", sub: "To explore" },
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-6">
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-white">{item.title}</p>
              <p className="text-gray-400 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* CATEGORY */}
        <div className="mt-14">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Shop by Category</h2>
            <span className="text-lime-400 cursor-pointer">View All →</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Clothing", "Furniture", "Home", "Sports", "Accessories"].map((cat, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-xl p-6 text-center hover:bg-[#222] transition"
              >
                <p className="text-white">{cat}</p>
                <p className="text-gray-400 text-sm">{Math.floor(Math.random() * 20)} items</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* TOP RATED */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6">
            <div className="flex justify-between mb-4">
              <h3>⭐ Top Rated</h3>
              <span className="text-lime-400 text-sm cursor-pointer">See all →</span>
            </div>

            <div className="space-y-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex justify-between items-center bg-black p-4 rounded-xl">
                  <p className="text-lime-400">$599.99</p>
                  <button className="bg-lime-400/20 px-3 py-1 rounded">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* NEW ARRIVALS */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6">
            <div className="flex justify-between mb-4">
              <h3>⚡ New Arrivals</h3>
              <span className="text-lime-400 text-sm cursor-pointer">See all →</span>
            </div>

            <div className="space-y-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex justify-between items-center bg-black p-4 rounded-xl">
                  <p className="text-lime-400">$99.99</p>
                  <button className="bg-lime-400/20 px-3 py-1 rounded">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            "Fast Delivery",
            "Secure Payments",
            "Best Prices",
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-6">
              <p className="font-semibold">{item}</p>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          ))}
        </div>
      </div>
       
      {
        isSidbar ? <ProdSideBar/> : ""
      }
    </div>
  );
}

export default Home
