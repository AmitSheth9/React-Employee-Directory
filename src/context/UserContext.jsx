import { createContext, useContext, useState, useMemo } from "react";
import { getUser } from "../services/users";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const presentUser = getUser();
    const [user, setUser] = useState(presentUser ? { id: presentUser.id, email: presentUser.email } : {} );

    const [signedIn, setSignedIn] = useState(false);

    return <UserContext.Provider value={{ user, setUser, signedIn, setSignedIn }}>{children}</UserContext.Provider>
};

const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used inside UserProvider');
    }
    return context;
};

export { UserContext, UserProvider, useUser };