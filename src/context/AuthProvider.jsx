import PropTypes from "prop-types";
import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        loading,
        userUpdateProfile,
      };
      
    return (
        <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default AuthProvider;