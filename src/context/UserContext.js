import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


// Set Context API Globally
export const AuthContext = createContext(null);

const UserContext = ({ children }) => {

    // user Authentication.
    const auth = getAuth(app);


    // User State
    const [user, setUser] = useState('Rock');



    // Create An account using Email Method.
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }




    // TODO ADD Profile Photo system Later.
    // Set user Name profile Photo
    const setUserNameAndPhoto = (name)=> 
    {
        return updateProfile(auth.currentUser, {
            displayName:{name}
        });
    }













    // Context Variable provider.
    const authInfo = { user, emailSignUp,setUserNameAndPhoto};




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;