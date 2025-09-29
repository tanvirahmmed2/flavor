import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
    const {  loader } = useContext(ShopContext)

    if (loader) {
        
            return <Navigate to="/login" replace />
        }// or spinner
    



    return children
}

export default ProtectedRoute
