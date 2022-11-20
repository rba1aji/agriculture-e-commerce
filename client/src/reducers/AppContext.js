import React from "react";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <AppContext.Provider
            value={{
                cart,
                setCart,
                user,
                setUser,
                loading,
                setLoading,
                error,
                setError,
                user, setUser
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
