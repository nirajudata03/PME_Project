import { useState } from "react";
import products from "../../data/productsData";

import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

const Products = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="py-24 px-6 md:px-16 bg-white">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-green-600 font-medium">Products</p>
                <h2 className="text-4xl font-bold mt-3">
                    Our Dehydrated Products
                </h2>
                <p className="mt-4 text-gray-600">
                    Premium-quality solar dehydrated fruits and vegetables,
                    processed hygienically using renewable energy.
                </p>
            </div>

            {/* Grid Wrapper with Animation */}
            <div
                className={`grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-700 ease-in-out`}
                style={ {   maxHeight: expanded ? "100%" : "450px", overflow: "hidden" } }
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                        {/* Image */}
                        <div className="h-40 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-gray-800">
                                {product.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* See More Button */}
            <div className="mt-14 text-center">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full 
                    bg-green-600 text-white font-medium 
                    hover:bg-green-700 transition-all duration-300 shadow-md md:hidden"
                >
                    {expanded ? "Show Less" : "See More Products"}
                    <span
                        className={`transform transition-transform duration-300`}>
                        {expanded ? <HiArrowSmUp /> : <HiArrowSmDown />}
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Products;
