import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import CategoryFood from './CategoryFood'

const categories = ['Pizza', 'Burgers', 'Pasta', 'Salads', 'Desserts', 'Drinks']

const Menu = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center'>

            {/* --- Menu Bar --- */}
            <div className='w-full md:w-3/4 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-base lg:text-lg my-4'>
                {categories.map((cat) => (
                    <NavLink
                        key={cat}
                        to={`/menu/${cat}`}
                        className={({ isActive }) =>
                            `p-2 sm:px-2 md:px-8 rounded-md border-2 transition duration-300 ${isActive
                                ? 'bg-orange-400 border-orange-400 text-white'
                                : 'hover:bg-orange-400 hover:border-orange-400 hover:text-white'
                            }`
                        }
                    >
                        {cat}
                    </NavLink>
                ))}
            </div>

            <div className='w-full md:w-3/4 mt-6'>
                <Routes>
                    <Route index element={<Navigate to='Pizza' replace />} />
                    <Route path=':category' element={<CategoryFood />} />
                </Routes>
            </div>
        </div>
    )
}

export default Menu
