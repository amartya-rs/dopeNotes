//reducer function
const authReducer = (authState, { type, payload }) => {
   switch (type) {
      case "TOGGLE_MODAL":
         return {
            ...authState,
            isModalOpen: payload[0],
            modalType: payload[1] ?? "login",
         };
      case "TOGGLE_LOGIN":
         return {
            ...authState,
            isLoggedIn: payload,
         };
      case "SET_EMAIL":
         return {
            ...authState,
            email: payload,
         };
      case "SET_PW":
         return {
            ...authState,
            password: payload,
         };
      case "SET_NAME":
         return {
            ...authState,
            name: payload,
         };
      case "SET_ERROR":
         return {
            ...authState,
            error: payload,
         };
      case "SET_GUEST_CREDENTIALS":
         return {
            ...authState,
            email: payload[0],
            password: payload[1],
            error: "",
         };
      case "SET_USER_CREDENTIALS":
         return {
            ...authState,
            name: `${payload?.name ?? ""} ${payload?.firstName ?? ""}`,
            email: payload?.email,
            password: payload?.password ?? "",
            isLoggedIn: true,
         };
      case "CLEAR_FIELDS":
         return {
            ...authState,
            name: "",
            email: "",
            password: "",
            error: "",
         };
      default:
         return authState;
   }
};

//initial states
const initialState = {
   isLoggedIn: false,
   name: "",
   email: "",
   password: "",
   error: "",
   modalType: "login",
   isModalOpen: false,
};

export { authReducer, initialState };
