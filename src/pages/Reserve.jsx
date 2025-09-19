import React from 'react'

const Reserve = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-mono font-semibold mb-2 text-gray-800">
        Reservations
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-xl mb-8">
        Secure your seat—whether it’s a cozy date night or a lively group dinner.
      </p>

      <form className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-md rounded-xl p-8 space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your phone number"
              required
            />
          </div>
        </div>

        {/* Date & Guests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-1 text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="guest" className="mb-1 text-sm font-medium text-gray-700">
              Guests
            </label>
            <select
              id="guest"
              name="guest"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>

        {/* Occasion */}
        <div className="flex flex-col">
          <label htmlFor="occasion" className="mb-1 text-sm font-medium text-gray-700">
            Occasion (optional)
          </label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Birthday, Anniversary, etc."
          />
        </div>


        <button type="submit" className="w-full bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300" >
          Request Reservation
        </button>
      </form>
    </div>
  )
}

export default Reserve
