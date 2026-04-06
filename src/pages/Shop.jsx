import React from "react";

const Shop = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-8">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        All Products
      </h1>
      <p className="text-gray-400 mb-6">50 products found</p>

      {/* SEARCH + FILTER */}
      <div className="border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 mb-8">
        
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 outline-none"
        />

        <select className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700">
          <option>All Categories</option>
        </select>

        <select className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700">
          <option>Featured</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {[1,2,3,4,5].map((_, i) => (
          <div key={i} className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-lime-400 transition">
            
            {/* IMAGE */}
            <div className="bg-gray-200 p-6">
              <div className="h-32 bg-gray-300 rounded"></div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              
              <p className="text-gray-400 text-xs mb-1">Electronics</p>

              <h3 className="text-sm font-semibold mb-2">
                Product Name Here
              </h3>

              {/* RATING */}
              <div className="flex items-center text-yellow-400 text-xs mb-3">
                ★★★★☆
                <span className="text-gray-400 ml-2">(120)</span>
              </div>

              {/* PRICE + BUTTON */}
              <div className="flex justify-between items-center">
                <p className="text-lime-400 font-bold">$99.99</p>

                <button className="bg-lime-400 text-black px-3 py-1 rounded-lg text-sm hover:bg-lime-300">
                  Add
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Shop;
