import React from "react";

const Contact = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center  ">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-orange-400 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Have a question, feedback, or want to reserve a table? Get in touch
          with us!
        </p>

        <form className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-700">
            📍 123 Food Street, Dhaka, Bangladesh
          </p>
          <p className="text-gray-700">📞 +880 1234-567890</p>
          <p className="text-gray-700">✉️ info@flavorbd.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
