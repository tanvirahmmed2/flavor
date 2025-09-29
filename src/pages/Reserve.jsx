import React from 'react'
import { useState } from 'react'

const Reserve = () => {
  const [problem, setProblem] = useState('')
  const [newReserve, setNewReserve] = useState({
    name: '',
    phone: '',
    date: '',
    guest: '2',
    occasion: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewReserve((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^01[0-9]{9}$/;

    if (!phoneRegex.test(newReserve.phone)) {
      setProblem("Invalid phone number. Must be 11 digits and start with 01.");
      return;
    }

    setProblem("");
    console.log(newReserve);

    try {

      const res = await fetch("http://localhost:5000/reserve/book", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newReserve),
      });
      const data = await res.json()
      if(data.success){
        setProblem(data.message)
      }else{
        setProblem(data.message)
      }
    } catch (error) {
      setProblem("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="w-full flex flex-col items-center justify-center py-12 ">
      <h1 className="text-4xl font-mono font-semibold mb-2 text-gray-800">
        Reservations
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-xl mb-8">
        Secure your seat—whether it’s a cozy date night or a lively group dinner.
      </p>

      <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-md rounded-xl p-8 space-y-6">

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
              value={newReserve.name}
              onChange={handleChange}
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
              value={newReserve.phone}
              onChange={handleChange}
            />
          </div>
        </div>

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
              value={newReserve.date}
              onChange={handleChange}
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
              value={newReserve.guest}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6+">6+</option>
            </select>
          </div>
        </div>


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
            value={newReserve.occasion}
            onChange={handleChange}
          />
        </div>


        <button type="submit" className="w-full bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300" >
          Request Reservation
        </button>
        <p>{problem}</p>
      </form>
    </div>
  )
}

export default Reserve
