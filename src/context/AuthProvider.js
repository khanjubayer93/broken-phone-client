import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;