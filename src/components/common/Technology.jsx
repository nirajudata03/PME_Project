import React from 'react'
import technology from '../../assets/technology.png'
import technologySteps from '../../data/technologySteps'

function Technology() {
    return (
        <div>
            <section className="py-24 px-6 md:px-16 bg-gray-50">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-green-600 font-medium">Technology</p>
                    <h2 className="text-4xl font-bold mt-3">
                        How the Solar Dehydration System Works
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Our system uses renewable solar energy and controlled airflow
                        to ensure efficient and hygienic dehydration.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Process Flow */}
                    <div className="space-y-8">
                        {technologySteps.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-5 bg-white p-6 rounded-xl shadow-sm group hover:bg-black/5 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-green-600 font-bold text-lg group-hover:text-green-700 transition-colors">
                                    {item.step}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-green-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Visual / Diagram Placeholder */}
                    <div className="relative group hover:shadow-xl transition-shadow">
                        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                            <p className="text-gray-700 font-medium">
                                ☀️ Solar Panel → 🌡️ Thermal Collector → 💨 Hot Air Fan → 🥬 Drying Chamber
                            </p>
                            <img
                                src={technology}
                                alt="Technology Diagram"
                                className="mt-6 mx-auto w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technology