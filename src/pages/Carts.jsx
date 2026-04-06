import React from "react";

const Carts = () => {
  return (
    <div className="fixed top-0 right-0 h-full w-[350px] bg-black text-white border-l border-gray-800 flex flex-col justify-between z-50">

      {/* HEADER */}
      <div>
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🛒 Cart 
            <span className="bg-lime-400 text-black text-xs px-2 py-0.5 rounded-full">
              1 items
            </span>
          </h2>

          <button className="text-gray-400 hover:text-white">✕</button>
        </div>

        {/* CART ITEM */}
        <div className="p-4">
          <div className="border border-gray-700 rounded-xl p-4 flex gap-4 items-center">
            
            {/* IMAGE */}
            <div className="w-16 h-16 bg-gray-300 rounded"></div>

            {/* DETAILS */}
            <div className="flex-1">
              <p className="text-sm font-medium">
                Smart Watch Series 5
              </p>

              <p className="text-lime-400 font-semibold">
                $299.99
              </p>

              <p className="text-gray-500 text-xs">
                $299.99 each
              </p>

              {/* QUANTITY */}
              <div className="flex items-center gap-2 mt-2">
                <button className="border border-gray-700 px-2 rounded">-</button>
                <span>1</span>
                <button className="border border-gray-700 px-2 rounded">+</button>
              </div>
            </div>

            {/* DELETE */}
            <button className="text-red-500">
              <i className="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-800">
        
        <div className="flex justify-between mb-4">
          <p className="text-gray-400">Total</p>
          <p className="text-xl font-semibold">$299.99</p>
        </div>

        <button className="w-full bg-lime-400 text-black py-3 rounded-xl font-semibold hover:bg-lime-300 transition">
          Checkout →
        </button>

        <p className="text-center text-gray-500 text-sm mt-3 cursor-pointer hover:text-red-400">
          Clear cart
        </p>

      </div>
    </div>
  );
};

export default Carts;
