const HeartIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill={props.fillColor ?? "none"}
         stroke={props.strokeColor ?? "white"}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-heart"
      >
         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
   );
};

const HomeIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="rgb(145, 55, 135)"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-home"
      >
         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
         <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
   );
};

const TagIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="rgb(145, 55, 135)"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-tag"
      >
         <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
         <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
   );
};

const ArchiveIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke={props.color ?? "rgb(145, 55, 135)"}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-archive"
         onClick={props.archiveHandler}
      >
         <polyline points="21 8 21 21 3 21 3 8" />
         <rect x="1" y="3" width="22" height="5" />
         <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
   );
};

const TrashIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke={props.color ?? "rgb(145, 55, 135)"}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-trash"
         onClick={props.trashHandler}
      >
         <polyline points="3 6 5 6 21 6" />
         <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
   );
};

const PlusIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="38"
         height="38"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-plus-circle"
         {...props}
      >
         <circle cx="12" cy="12" r="10" />
         <line x1="12" y1="8" x2="12" y2="16" />
         <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
   );
};

const PaletteIcon = (props) => {
   return (
      <svg width="26" height="26" viewBox="0 0 24 24" {...props}>
         <path
            d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5c0 .12.05.23.13.33c.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4c0-3.86-3.59-7-8-7z"
            fill="currentColor"
         ></path>
         <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor"></circle>
         <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor"></circle>
         <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor"></circle>
         <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor"></circle>
      </svg>
   );
};

const UserIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28"
         height="28"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-user"
      >
         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
         <circle cx="12" cy="7" r="4"></circle>
      </svg>
   );
};

const CrossIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-x"
         {...props}
      >
         <line x1="18" y1="6" x2="6" y2="18" />
         <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
   );
};

const LogoutIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28"
         height="28"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-log-out"
         onClick={props.logoutHandler}
      >
         <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
         <polyline points="16 17 21 12 16 7" />
         <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
   );
};

export {
   HeartIcon,
   UserIcon,
   CrossIcon,
   LogoutIcon,
   HomeIcon,
   TagIcon,
   TrashIcon,
   ArchiveIcon,
   PlusIcon,
   PaletteIcon,
};
