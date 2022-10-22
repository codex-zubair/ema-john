import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
export const AuthContext = createContext(null);

const UserContext = ({ children }) => {

    // user Authentication.
    const auth = getAuth(app);


    // User State
    const [user, setUser] = useState('Rock');


    // Context Variable provider.
    const authInfo = { user }






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;