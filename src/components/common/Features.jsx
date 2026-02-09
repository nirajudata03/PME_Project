import React from "react";
import featureData from "../../data/featureData";
import FeatureCard from "../cards/FeatureCard";

const Features = () => {
    return (
        <section className="py-24 px-6 md:px-16 bg-white">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
                <p className="text-green-600 font-medium">Features</p>
                <h2 className="text-4xl font-bold mt-3">
                    Efficient Solar Dehydration Technology
                </h2>
                <p className="mt-4 text-gray-600">
                    Sustainable and eco-friendly dehydration solutions for
                    agriculture and small-scale industries.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-32">
                {featureData.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        {...feature}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
