import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
      className="bg-gray-100 py-16 px-6 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left side */}
        <div className="space-y-6">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold"
          >
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you're curious about products,
            partnerships, or anything else—our team is ready to answer all your
            questions.
          </p>

          <div className="space-y-4 text-gray-700" itemScope itemType="https://schema.org/Organization">
            <p>
              📞 <strong>Phone:</strong>{" "}
              <span itemProp="telephone">+91 98765 43210</span>
            </p>
            <p>
              ✉️ <strong>Email:</strong>{" "}
              <a href="mailto:contact@taylormoto.com" itemProp="email">
                contact@taylormoto.com
              </a>
            </p>
            <p>
              📍 <strong>Address:</strong>{" "}
              <span itemProp="address">Taylor Moto HQ, Mumbai, India</span>
            </p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form
          className="bg-white p-8 shadow-md rounded-lg space-y-6"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
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
