import { createContext, useContext, useState } from "react";


const UserContext = createContext();

const UserProvider = ({ mockUser, children }) => {
    
    const [user, setUser] = useState(mockUser ? { id: mockUser.id, email: mockUser.email } : {} );

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