import { createContext, useContext, useState } from "react";
export const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) =>{
    const  [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}
