import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../components/Context'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";

const Profile = () => {
    const { user } = useContext(ShopContext)
    console.log(user)
    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 py-10 '>
            <p className='text-8xl text-orange-400'><CiUser /></p>
            <div className='flex flex-col items-start gap-6 bg-white shadow-md rounded-xl p-6 w-80'>
                <div>
                    <p className='font-semibold text-gray-600'>User ID:</p>
                    <p className='text-gray-800'>{user._id}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-600'>Name:</p>
                    <p className='text-gray-800'>{user.name}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-600'>Email:</p>
                    <p className='text-gray-800'>{user.email}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-600'>Phone:</p>
                    <p className='text-gray-800'>{user.phone}</p>
                </div>
            </div>
            <div className='flex gap-4 mt-4'>
                <Link to='/cart' className='px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition'>
                    Go to cart
                </Link>
                <Link
                    to='/'
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition'
                >
                    Update Info
                </Link>
            </div>
        </section>
    )
}

export default Profile
