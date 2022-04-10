import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);
export const UserContext = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    );

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};
