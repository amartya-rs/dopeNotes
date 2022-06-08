import "./modal.css";
import { useAuth } from "../../context/auth-context";
import { useEffect } from "react";
import { CrossIcon } from "../../assets/icons";

const Modal = () => {
   const {
      authState: { name, email, password, error, modalType, isModalOpen },
      authDispatch,
      loginHandler,
      signupHandler,
      setGuestCredentials,
      checkSignupCredentials,
   } = useAuth();

   useEffect(() => {
      authDispatch({ type: "CLEAR_FIELDS" });
      // eslint-disable-next-line
   }, [modalType]);

   return (
      <div className={`modal-container ${!isModalOpen ? "hide-modal" : ""}`}>
         <form
            className="auth-form"
            onSubmit={modalType === "login" ? loginHandler : signupHandler}
         >
            <button
               type="button"
               className="corner-button"
               onClick={() =>
                  authDispatch({ type: "TOGGLE_MODAL", payload: [false] })
               }
            >
               <CrossIcon width="24" height="24" />
            </button>
            <div className="form-header">
               <h5>{modalType === "login" ? "LOGIN" : "SIGNUP"}</h5>
            </div>
            <div className="form-field">
               {modalType === "signup" && (
                  <div>
                     <label className="h6 font-medium" htmlFor="name">
                        Name*
                     </label>
                     <input
                        onChange={(e) =>
                           authDispatch({
                              type: "SET_NAME",
                              payload: checkSignupCredentials(e.target),
                           })
                        }
                        name="name"
                        className="text-input"
                        type="text"
                        placeholder="Kanye West"
                        value={name}
                        required
                     />
                  </div>
               )}
               <div>
                  <label className="h6 font-medium" htmlFor="email">
                     E-mail*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_EMAIL",
                           payload:
                              modalType === "login"
                                 ? e.target.value
                                 : checkSignupCredentials(e.target),
                        })
                     }
                     className="text-input"
                     type="email"
                     name="email"
                     placeholder="kanye@xyz.com"
                     value={email}
                     required
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="password">
                     Password*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_PW",
                           payload:
                              modalType === "login"
                                 ? e.target.value
                                 : checkSignupCredentials(e.target),
                        })
                     }
                     name="password"
                     className="text-input"
                     type="password"
                     placeholder="***************"
                     value={password}
                     required
                  />
               </div>
            </div>
            <span className="auth-error">{error}</span>
            {modalType === "login" ? (
               <>
                  <button className="button primary" type="submit">
                     LOGIN
                  </button>
                  <div className="form-footer">
                     <p className="p-sm">Not a user yet?</p>
                     <button
                        type="submit"
                        className="button-link"
                        onClick={() =>
                           authDispatch({
                              type: "TOGGLE_MODAL",
                              payload: [true, "signup"],
                           })
                        }
                     >
                        Signup
                     </button>
                  </div>
                  <span
                     className="helper font-medium"
                     onClick={setGuestCredentials}
                  >
                     Use Guest Credentials
                  </span>
               </>
            ) : (
               <>
                  <button className="button primary" type="submit">
                     SIGNUP
                  </button>
                  <div className="form-footer">
                     <p className="p-sm">Already have an account?</p>
                     <button
                        type="button"
                        className="button-link"
                        onClick={() =>
                           authDispatch({
                              type: "TOGGLE_MODAL",
                              payload: [true, "login"],
                           })
                        }
                     >
                        Login
                     </button>
                  </div>
               </>
            )}
         </form>
      </div>
   );
};

export { Modal };
