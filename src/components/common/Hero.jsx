import React from 'react'
import heroImage from '../../assets/heroImage.png'

function Hero() {
    return (
        <div>
            <section className="relative h-[90vh] flex items-center justify-center"
                style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient from-black via-gray-900 to-green-900" />

                <div className="relative z-10 text-center max-w-3xl px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                        Sustainable Dehydration.
                        <br />
                        Powered by the Sun.
                    </h1>

                    <p className="mt-4 text-black">
                        Solar powered dehydration plant for fruits, vegetables and herbs
                    </p>

                    {/* <button className="mt-6 px-6 py-3 border-2 border-black bg-gray-900 text-white rounded-lg hover:bg-transparent hover:text-black transition-all duration-300">
                        Explore Our Solutions
                    </button> */}
                </div>
            </section>
        </div>
    )
}

export default Hero