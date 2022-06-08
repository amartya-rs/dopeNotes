import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducer/auth-reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem("token") !== null) {
         authDispatch({ type: "TOGGLE_LOGIN", payload: true });
      }
      // eslint-disable-next-line
   }, []);

   //login handler
   const loginHandler = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post(`/api/auth/login`, {
            email: authState.email,
            password: authState.password,
         });
         // saving the encodedToken in the localStorage
         localStorage.setItem("token", response.data.encodedToken);
         authDispatch({
            type: "SET_USER_CREDENTIALS",
            payload: response.data.foundUser,
         });
         authDispatch({
            type: "TOGGLE_MODAL",
            payload: [false],
         });
         navigate("/home");
      } catch (error) {
         authDispatch({
            type: "SET_ERROR",
            payload: error.response.data.errors[0],
         });
      }
   };

   //setting the guest credentials
   const setGuestCredentials = () => {
      authDispatch({
         type: "SET_GUEST_CREDENTIALS",
         payload: ["test@admin.com", "admin123"],
      });
   };

   //signup handler
   const signupHandler = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post(`/api/auth/signup`, {
            name: authState.name,
            email: authState.email,
            password: authState.password,
         });
         // saving the encodedToken in the localStorage
         localStorage.setItem("token", response.data.encodedToken);
         authDispatch({
            type: "SET_USER_CREDENTIALS",
            payload: response.data.createdUser,
         });
         authDispatch({
            type: "TOGGLE_MODAL",
            payload: [false],
         });
         navigate("/home");
      } catch (error) {
         authDispatch({
            type: "SET_ERROR",
            payload: error.response.data.errors[0],
         });
      }
   };

   //validating user credentials
   const checkSignupCredentials = ({ name, value }) => {
      const regex = /^\w+@\w+\.\w{2,}$/;
      if (value === "") {
         authDispatch({
            type: "SET_ERROR",
            payload: `Enter your ${name}`,
         });
         return "";
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "",
         });
         if (name === "name") {
            if (value.length > 4) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Name should be more then 5 character",
               });
               return value;
            }
         }
         if (name === "email") {
            if (regex.test(value)) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Enter a valid email",
               });
               return value;
            }
         }
         if (name === "password") {
            if (value.length > 6) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Password should be more than 6 characters",
               });
               return value;
            }
         }
      }
   };

   const [authState, authDispatch] = useReducer(authReducer, initialState);

   return (
      <AuthContext.Provider
         value={{
            authState,
            authDispatch,
            loginHandler,
            signupHandler,
            setGuestCredentials,
            checkSignupCredentials,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
