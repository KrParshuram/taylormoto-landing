// src/components/Contact/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 text-gray-800" >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left side */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you're curious about products,
            partnerships, or anything else—our team is ready to answer all your
            questions.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              ✉️ <strong>Email:</strong> contact@taylormoto.com
            </p>
            <p>
              📍 <strong>Address:</strong> Taylor Moto HQ, Mumbai, India
            </p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form className="bg-white p-8 shadow-md rounded-lg space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
