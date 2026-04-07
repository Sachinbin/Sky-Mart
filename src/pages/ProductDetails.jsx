import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Auth } from "../context/AuthContext";
import ProdSideBar from "../components/ProdSideBar";

const ProductDetails = () => {
    let { id } = useParams()
    let { productData,
        isSidbar,
        setIsSidebar,
        cart,
        setCart 
    } = useContext(Auth)

    let navigate = useNavigate()

    // console.log(isSidbar)
    let data = productData.find((elem) => {
        return elem.id == id
    })
    if (!data) {
        return <h1 className="text-white">Loading...</h1>;
    }

    return (
        <>
            <div className="bg-black text-white min-h-screen px-6 md:px-12 py-8">

                {/* BREADCRUMB */}
                <p className="text-gray-400 text-sm mb-6">
                    ← Products / {data.category} / {data.title}
                </p>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT IMAGE */}
                    <div className="bg-[#1a1a1a] rounded-2xl p-10 flex justify-center">
                        <img
                            src={data.images[0]}
                            alt="product"
                            className="rounded-lg"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* CATEGORY */}
                        <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-xs">
                            {data.category}
                        </span>

                        {/* TITLE */}
                        <h1 className="text-3xl md:text-4xl font-semibold mt-4 mb-3">
                            {data.title}
                        </h1>

                        {/* RATING */}
                        <div className="flex items-center gap-2 text-yellow-400 mb-4">
                            ★★★★☆
                            <span className="text-gray-400 text-sm">4.2 ({data.rating})</span>
                        </div>

                        <hr className="border-gray-800 mb-4" />

                        {/* PRICE */}
                        <p className="text-3xl font-bold text-lime-400 mb-4">
                            ${data.price}
                        </p>

                        <hr className="border-gray-800 mb-4" />

                        {/* DESCRIPTION */}
                        <p className="text-gray-400 text-sm mb-6">
                            {data.description}
                        </p>

                        {/* BUTTONS */}
                        <div className="flex items-center gap-4 mb-6">
                            <button className="bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300 transition">
                                🛒 Add to Cart
                            </button>

                            <button className="border border-gray-700 p-3 rounded-xl hover:border-lime-400">
                                ❤️
                            </button>
                        </div>

                        {/* FEATURES */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            <div className="border border-gray-700 rounded-xl p-4 text-center">
                                <p className="text-lime-400">🚚</p>
                                <p className="text-sm">Free Delivery</p>
                                <p className="text-gray-400 text-xs">On orders $50+</p>
                            </div>

                            <div className="border border-gray-700 rounded-xl p-4 text-center">
                                <p className="text-lime-400">🔒</p>
                                <p className="text-sm">Secure Pay</p>
                                <p className="text-gray-400 text-xs">256-bit SSL</p>
                            </div>

                            <div className="border border-gray-700 rounded-xl p-4 text-center">
                                <p className="text-lime-400">↩️</p>
                                <p className="text-sm">Easy Returns</p>
                                <p className="text-gray-400 text-xs">30-day policy</p>
                            </div>

                        </div>

                        {/* NAV BUTTONS */}
                        <div className="flex gap-4">
                            <button onClick={() => navigate('/dashboard/shop')} className="flex-1 bg-[#1a1a1a] py-3 rounded-xl hover:bg-gray-800">
                                ← Previous
                            </button>

                            <button onClick={() => {
                                let randomNum = Math.floor(Math.random() * 20) * 1
                                navigate(`/dashboard/product/${randomNum}`)
                            }} className="flex-1 bg-lime-400 text-black py-3 rounded-xl font-semibold hover:bg-lime-300">
                                Next →
                            </button>
                        </div>

                    </div>
                </div>
            </div>

    // sidebar-------------------------------------------------------------
            {
                isSidbar ? <ProdSideBar/>: ""
            }
        </>



    );
};

export default ProductDetails;
