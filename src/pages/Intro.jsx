import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../components/Context';

const Intro = () => {
  const { foodItems } = useContext(ShopContext);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    if (foodItems.length > 0) {
      const randomNumber = Math.floor(Math.random() * foodItems.length);
      setRandomIndex(randomNumber);
    }
  }, [foodItems]);

  const selectedItem = randomIndex !== null ? foodItems[randomIndex] : null;

  const bgImage = selectedItem
    ? `url(${selectedItem.image})`
    : 'none';

  return (
    <section
      style={{ backgroundImage: bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="w-full relative h-[500px] rounded-md overflow-hidden flex flex-col items-center justify-center gap-4 text-center"
    >
      <div className='w-full h-full flex flex-col items-center justify-center gap-4 backdrop-blur-sm px-12'>
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          Enjoy your meal with <span className="text-green-400">Flavor</span>
        </h1>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 ">
          <button className="w-full bg-white text-center font-semibold rounded-md py-2 hover:bg-gray-100 transition">
            Dine in
          </button>
          <button className="w-full bg-white text-center font-semibold rounded-md py-2 hover:bg-gray-100 transition">
            Home delivery
          </button>
          <Link
            to="/saved"
            className="w-full bg-white text-center font-semibold rounded-md py-2 hover:bg-gray-100 transition"
          >
            Saved
          </Link>
        </div>

        {selectedItem && (
          <Link
            to={`/menu/${selectedItem.name}`}
            className="font-semibold absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] text-center text-orange-600 bg-white px-4 py-2 rounded-lg shadow hover:scale-105 transition duration-500"
          >
            {selectedItem.name}
          </Link>
        )}
      </div>

    </section>
  );
};

export default Intro;
