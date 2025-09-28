import React from "react";

const About = () => {
  return (
    <div className=" h-auto w-full flex flex-col items-center justify-center  ">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-orange-400 mb-6">
          About Our Restaurant
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Delicious Bites</span> —
          where taste meets tradition. For over a decade, we’ve been serving
          freshly prepared dishes made from locally sourced ingredients.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Whether you’re here for a family dinner, a quick lunch, or a romantic
          evening, our team is dedicated to making your dining experience
          memorable. We believe food should not only satisfy hunger but also
          create moments to cherish.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            alt="Restaurant"
            className="rounded-2xl shadow-lg w-full max-w-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
