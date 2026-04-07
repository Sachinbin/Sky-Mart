import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";

const Carts = ({elem}) => {
  let {deleCartItem,IncreaseItemQty,DecreaseItemQty}= useContext(Auth)
  return (
    <div className="p-4">
      <div className="border border-gray-700 rounded-xl p-4 flex gap-4 items-center">

        {/* IMAGE */}
        <div className="w-16 h-16 bg-gray-300 rounded">
          <img src={elem.images[0]} alt="" />
        </div>

        {/* DETAILS */}
        <div className="flex-1">
          <p className="text-sm font-medium">
            {elem.title}
          </p>

          <p className="text-lime-400 font-semibold">
           ${elem.price}
          </p>

          <p className="text-gray-500 text-xs">
            ${elem.price} each
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-2 mt-2">
            <button onClick={()=>DecreaseItemQty(elem.id)} className="border border-gray-700 px-2 rounded">-</button>
            <span>1</span>
            <button onClick={()=>IncreaseItemQty(elem.id)} className="border border-gray-700 px-2 rounded">+</button>
          </div>
        </div>

        {/* DELETE */}
        <button onClick={()=>deleCartItem(elem.id)} className="text-red-500">
          <i className="fa-solid fa-trash"></i>
        </button>

      </div>
    </div>
  );
};

export default Carts;
