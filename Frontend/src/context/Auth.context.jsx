import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/user.services.js";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const fetchCurrentUser = async () => {

        try {

            const response = await getCurrentUser();
            setUser(response.data);

        } catch (error) {

            setUser(null);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchCurrentUser();

    }, []);

    const value = {

        user,

        loading,

        isAuthenticated: !!user,

        setUser,

        fetchCurrentUser

    };

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    return useContext(AuthContext);

};