import React, { useContext, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Auth } from "../context/AuthContext";
import ProdSideBar from "../components/ProdSideBar";
import { set } from "react-hook-form";
import { toast } from "react-toastify";

const Shop = () => {
  let { productData, isSidbar, setIsSidebar, addItemInCart } = useContext(Auth);
  let [search, setSearch] = useState("")
  let [category, setCategory] = useState("")


  let result = productData.filter((elem) => {
    let searchData = elem.title.toLowerCase().includes(search.toLowerCase());
    let categoryData = category ?elem.category===category:true;
    return searchData && categoryData
  })
  return (
    <div>
      <div className="bg-black text-white min-h-screen px-6 md:px-12 py-8">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          All Products
        </h1>
        <p className="text-gray-400 mb-6">50 products found</p>

        {/* SEARCH + FILTER */}
        <div className="border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 mb-8">

          <input
            // ref={inputRef}
            onChange={(e)=>setSearch(e.target.value)}

            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 outline-none"
          />

          <select onChange={(e) => setCategory(e.target.value)} className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700">
            <option>All Categories</option>
            <option>beauty</option>
            <option>Electronic</option>
          </select>

        </div>

        {/* PRODUCTS GRID */}
       {
        result?
         <div className="flex flex-wrap gap-8">
          {
            result.map((elem) => {
              return <ProductCard item={elem} key={elem.id} />
            })
          }
        </div>
        :
         <div className="flex flex-wrap gap-8">
          {
            productData.map((elem) => {
              return <ProductCard item={elem} key={elem.id} />
            })
          }
        </div>
       }


      </div>

      {
        isSidbar ? <ProdSideBar /> : ""
      }
    </div>
  );
};

export default Shop;
