import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(ShopContext) // assume you store user in context
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        // simulate async check
        const timer = setTimeout(() => {
            setChecking(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    if (checking) {
        return <div className="text-center p-4">Checking login...</div> 
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
