import React from 'react'

function Contact() {
  return (
    <div>
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border p-3 rounded"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Send Message
            </button>
          </div>

          <div className="bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">
            Google Map Placeholder
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact